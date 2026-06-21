import React, { useEffect, useId } from 'react';
import mermaid from 'mermaid';

interface SimpleMarkdownRendererProps {
  content: string;
  className?: string;
}

const SimpleMarkdownRenderer: React.FC<SimpleMarkdownRendererProps> = ({ content, className = "" }) => {
  const baseId = useId().replace(/:/g, '');

  useEffect(() => {
    // Pull canonical token values from CSS vars so mermaid matches the design system.
    const styles =
      typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null;
    const readVar = (name: string, fallback: string) =>
      styles?.getPropertyValue(name)?.trim() || fallback;

    const accentBrand = `oklch(${readVar('--accent-brand', '0.68 0.22 140')})`;
    const accentSoft = `oklch(${readVar('--accent-soft', '0.92 0.07 140')})`;
    const foreground = `oklch(${readVar('--foreground', '0.22 0.025 135')})`;
    const foregroundMuted = `oklch(${readVar('--foreground-muted', '0.48 0.020 135')})`;
    const background = `oklch(${readVar('--background', '0.975 0.022 130')})`;
    const backgroundElevated = `oklch(${readVar('--background-elevated', '0.955 0.028 130')})`;
    const border = `oklch(${readVar('--border', '0.88 0.020 130')})`;

    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      securityLevel: 'loose',
      fontFamily: 'inherit',
      themeVariables: {
        primaryColor: accentSoft,
        primaryTextColor: foreground,
        primaryBorderColor: accentBrand,
        secondaryColor: backgroundElevated,
        tertiaryColor: background,
        lineColor: foregroundMuted,
        textColor: foreground,
        mainBkg: backgroundElevated,
        background,
        nodeBorder: border,
        clusterBkg: background,
        clusterBorder: border,
        edgeLabelBackground: background,
      },
    });
  }, []);

  const parseMarkdown = (markdown: string) => {
    // Split content into lines for processing
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex].trim();

      // Skip empty lines
      if (!line) {
        currentIndex++;
        continue;
      }

      // Headers — bare semantic tags; .blog-prose owns the styling.
      if (line.startsWith('# ')) {
        elements.push(<h1 key={currentIndex}>{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={currentIndex}>{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={currentIndex}>{line.substring(4)}</h3>);
      } else if (line.startsWith('#### ')) {
        elements.push(<h4 key={currentIndex}>{line.substring(5)}</h4>);
      }
      // Tables
      else if (line.includes('|') && lines[currentIndex + 1]?.includes('|') && lines[currentIndex + 1]?.includes('-')) {
        const tableResult = parseTable(lines, currentIndex);
        elements.push(tableResult.element);
        currentIndex = tableResult.nextIndex - 1;
      }
      // Code blocks (including mermaid)
      else if (line.startsWith('```')) {
        const codeResult = parseCodeBlock(lines, currentIndex);
        elements.push(codeResult.element);
        currentIndex = codeResult.nextIndex - 1;
      }
      // Lists
      else if (line.match(/^[-*+]\s/) || line.match(/^\d+\.\s/)) {
        const listResult = parseList(lines, currentIndex);
        elements.push(listResult.element);
        currentIndex = listResult.nextIndex - 1;
      }
      // Blockquotes — bare; .blog-prose blockquote styles it.
      else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={currentIndex}>
            {parseInlineFormatting(line.substring(2))}
          </blockquote>
        );
      }
      // Embedded interactive diagrams: @[title](url)
      else if (line.match(/^@\[.*?\]\(.*?\)$/)) {
        const match = line.match(/^@\[(.*?)\]\((.*?)\)$/);
        if (match) {
          const [, title, url] = match;
          elements.push(
            <figure key={currentIndex} className="my-8">
              <div className="rounded-lg overflow-hidden border border-border bg-background-elevated">
                <iframe
                  src={url}
                  title={title}
                  className="aspect-video w-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  referrerPolicy="no-referrer"
                />
              </div>
              {title && (
                <figcaption className="text-center text-body-sm text-foreground-muted mt-3 italic">
                  {title}
                </figcaption>
              )}
            </figure>
          );
        }
      }
      // Images: ![alt](url)
      else if (line.match(/^!\[.*?\]\(.*?\)$/)) {
        const match = line.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (match) {
          const [, alt, url] = match;
          elements.push(
            <figure key={currentIndex} className="my-6">
              <img
                src={url}
                alt={alt}
                className="w-full rounded-lg border border-border"
                loading="lazy"
              />
              {alt && (
                <figcaption className="text-center text-body-sm text-foreground-muted mt-2 italic">
                  {alt}
                </figcaption>
              )}
            </figure>
          );
        }
      }
      // Horizontal rule
      else if (line === '---' || line === '***') {
        elements.push(<hr key={currentIndex} />);
      }
      // Regular paragraphs
      else {
        elements.push(
          <p key={currentIndex}>{parseInlineFormatting(line)}</p>
        );
      }

      currentIndex++;
    }

    return elements;
  };

  const parseTable = (lines: string[], startIndex: number) => {
    const tableLines: string[] = [];
    let currentIndex = startIndex;

    // Collect all table lines
    while (currentIndex < lines.length && lines[currentIndex].includes('|')) {
      tableLines.push(lines[currentIndex]);
      currentIndex++;
    }

    if (tableLines.length < 3) {
      return { element: <div key={startIndex}>Invalid table</div>, nextIndex: currentIndex };
    }

    const headerLine = tableLines[0];
    const dataLines = tableLines.slice(2); // Skip separator line

    // Parse header
    const headers = headerLine.split('|').map(cell => cell.trim()).filter(cell => cell);

    // Parse data rows
    const rows = dataLines.map(line =>
      line.split('|').map(cell => cell.trim()).filter(cell => cell)
    );

    const tableElement = (
      <table key={startIndex}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col">
                {parseInlineFormatting(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{parseInlineFormatting(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    return { element: tableElement, nextIndex: currentIndex };
  };

  const parseCodeBlock = (lines: string[], startIndex: number) => {
    const firstLine = lines[startIndex];
    const language = firstLine.substring(3).trim() || 'text';
    let currentIndex = startIndex + 1;
    const codeLines: string[] = [];

    // Collect code lines until closing ```
    while (currentIndex < lines.length && !lines[currentIndex].startsWith('```')) {
      codeLines.push(lines[currentIndex]);
      currentIndex++;
    }

    // Check if it's a mermaid diagram
    if (language === 'mermaid') {
      const mermaidId = `mermaid-${baseId}-${startIndex}`;
      const code = codeLines.join('\n');

      // Schedule a render once the node is mounted.
      queueMicrotask(() => {
        const element = document.getElementById(mermaidId);
        if (element && code.trim()) {
          try {
            element.innerHTML = code.trim();
            element.removeAttribute('data-processed');
            mermaid.run({ nodes: [element] });
          } catch (error) {
            console.error('Mermaid rendering error:', error);
          }
        }
      });

      return {
        element: (
          <div key={startIndex} className="my-8 flex justify-center">
            <div
              id={mermaidId}
              className="mermaid bg-background-elevated border border-border rounded-lg p-6 overflow-x-auto"
            >
              {code}
            </div>
          </div>
        ),
        nextIndex: currentIndex + 1,
      };
    }

    const codeElement = (
      <pre key={startIndex}>
        <code className={`language-${language}`}>{codeLines.join('\n')}</code>
      </pre>
    );

    return { element: codeElement, nextIndex: currentIndex + 1 };
  };

  const parseList = (lines: string[], startIndex: number) => {
    const listItems: string[] = [];
    let currentIndex = startIndex;
    const isOrdered = lines[startIndex].match(/^\d+\.\s/);

    // Collect list items
    while (currentIndex < lines.length) {
      const line = lines[currentIndex].trim();
      if (isOrdered && line.match(/^\d+\.\s/)) {
        listItems.push(line.replace(/^\d+\.\s/, ''));
      } else if (!isOrdered && line.match(/^[-*+]\s/)) {
        listItems.push(line.replace(/^[-*+]\s/, ''));
      } else if (line === '') {
        // Skip empty lines within lists
      } else {
        break;
      }
      currentIndex++;
    }

    const ListTag = isOrdered ? 'ol' : 'ul';

    const listElement = (
      <ListTag key={startIndex}>
        {listItems.map((item, index) => (
          <li key={index}>{parseInlineFormatting(item)}</li>
        ))}
      </ListTag>
    );

    return { element: listElement, nextIndex: currentIndex };
  };

  const parseInlineFormatting = (text: string): React.ReactNode => {
    // Handle inline code first — bare <code>; .blog-prose styles it.
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Handle bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Handle italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Handle links — bare <a>; .blog-prose styles link color/underline via accent tokens.
    text = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className={`blog-prose ${className}`}>
      {parseMarkdown(content)}
    </div>
  );
};

export default SimpleMarkdownRenderer;

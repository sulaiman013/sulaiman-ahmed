import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface SimpleMarkdownRendererProps {
  content: string;
  className?: string;
}

const SimpleMarkdownRenderer: React.FC<SimpleMarkdownRendererProps> = ({ content, className = "" }) => {
  const mermaidRef = useRef<number>(0);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'inherit',
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

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={currentIndex} className="text-4xl font-bold mt-8 mb-6 text-gray-900 dark:text-gray-100">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={currentIndex} className="text-3xl font-bold mt-8 mb-5 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex} className="text-2xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={currentIndex} className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-gray-100">
            {line.substring(5)}
          </h4>
        );
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
      // Blockquotes
      else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={currentIndex} className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800 italic">
            {parseInlineFormatting(line.substring(2))}
          </blockquote>
        );
      }
      // Horizontal rule
      else if (line === '---' || line === '***') {
        elements.push(
          <hr key={currentIndex} className="border-t border-gray-300 dark:border-gray-600 my-8" />
        );
      }
      // Regular paragraphs
      else {
        elements.push(
          <p key={currentIndex} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {parseInlineFormatting(line)}
          </p>
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
      <div key={startIndex} className="my-6 overflow-x-auto">
        <table className="w-full border-collapse bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border border-gray-200 dark:border-gray-700 px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {parseInlineFormatting(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-200 dark:border-gray-700 px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {parseInlineFormatting(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
      const mermaidId = `mermaid-${startIndex}-${Date.now()}`;
      const code = codeLines.join('\n');
      
      setTimeout(() => {
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
      }, 100);

      return {
        element: (
          <div key={startIndex} className="my-8 flex justify-center">
            <div 
              id={mermaidId}
              className="mermaid bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-x-auto"
            >
              {code}
            </div>
          </div>
        ),
        nextIndex: currentIndex + 1,
      };
    }

    const codeElement = (
      <div key={startIndex} className="my-6">
        <pre className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 overflow-x-auto">
          <code className={`language-${language} text-sm`}>
            {codeLines.join('\n')}
          </code>
        </pre>
      </div>
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
    const listClassName = isOrdered ? 'list-decimal' : 'list-disc';

    const listElement = (
      <ListTag key={startIndex} className={`${listClassName} pl-6 mb-4 space-y-2`}>
        {listItems.map((item, index) => (
          <li key={index} className="mb-1">
            {parseInlineFormatting(item)}
          </li>
        ))}
      </ListTag>
    );

    return { element: listElement, nextIndex: currentIndex };
  };

  const parseInlineFormatting = (text: string): React.ReactNode => {
    // Handle inline code first
    text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>');
    
    // Handle bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
    
    // Handle italic
    text = text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    // Handle links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {parseMarkdown(content)}
    </div>
  );
};

export default SimpleMarkdownRenderer;

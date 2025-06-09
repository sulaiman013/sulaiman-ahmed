
import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = "" }) => {
  const convertMarkdownToHtml = (markdown: string) => {
    let html = markdown;
    
    // Convert tables first (before other processing)
    html = convertTables(html);
    
    // Convert code blocks (multi-line) - must be before inline code
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
      return `<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg my-4 overflow-x-auto">
        <pre class="p-4 text-sm whitespace-pre overflow-x-auto"><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>
      </div>`;
    });
    
    // Convert inline code
    html = html.replace(/`([^`\n]+)`/gim, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono border border-gray-300 dark:border-gray-600">$1</code>');
    
    // Convert headers (from largest to smallest to avoid conflicts)
    html = html.replace(/^###### (.*$)/gim, '<h6 class="text-base font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">$1</h6>');
    html = html.replace(/^##### (.*$)/gim, '<h5 class="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4 class="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-100">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-12 mb-8 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-16 mb-10 text-gray-900 dark:text-gray-100">$1</h1>');
    
    // Convert bold text
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
    
    // Convert italic text
    html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');
    
    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Convert unordered lists - improved regex
    const lines = html.split('\n');
    let inList = false;
    let listType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for unordered list items
      if (/^[\*\-\+]\s+/.test(line)) {
        const content = line.replace(/^[\*\-\+]\s+/, '');
        if (!inList || listType !== 'ul') {
          if (inList) lines[i-1] += `</${listType}>`;
          lines[i] = `<ul class="list-disc pl-6 mb-4 space-y-1"><li class="mb-2">${content}</li>`;
          inList = true;
          listType = 'ul';
        } else {
          lines[i] = `<li class="mb-2">${content}</li>`;
        }
      }
      // Check for ordered list items
      else if (/^\d+\.\s+/.test(line)) {
        const content = line.replace(/^\d+\.\s+/, '');
        if (!inList || listType !== 'ol') {
          if (inList) lines[i-1] += `</${listType}>`;
          lines[i] = `<ol class="list-decimal pl-6 mb-4 space-y-1"><li class="mb-2">${content}</li>`;
          inList = true;
          listType = 'ol';
        } else {
          lines[i] = `<li class="mb-2">${content}</li>`;
        }
      }
      // If not a list item and we were in a list, close it
      else if (inList && line !== '') {
        lines[i-1] += `</${listType}>`;
        inList = false;
        listType = '';
      }
    }
    
    // Close any remaining open list
    if (inList) {
      lines[lines.length - 1] += `</${listType}>`;
    }
    
    html = lines.join('\n');
    
    // Convert blockquotes
    html = html.replace(/^>\s*(.*)$/gim, '<blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 my-4 bg-gray-50 dark:bg-gray-800 italic text-gray-700 dark:text-gray-300">$1</blockquote>');
    
    // Convert horizontal rules
    html = html.replace(/^---$/gim, '<hr class="border-t border-gray-300 dark:border-gray-600 my-8" />');
    
    // Convert line breaks to paragraphs
    const paragraphs = html.split(/\n\s*\n/);
    html = paragraphs.map(paragraph => {
      const trimmed = paragraph.trim();
      if (!trimmed) return '';
      
      // Don't wrap elements that are already block elements
      if (trimmed.match(/^<(h[1-6]|div|table|ul|ol|blockquote|hr|pre)/i)) {
        return trimmed;
      }
      
      return `<p class="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">${trimmed}</p>`;
    }).join('\n');
    
    return html;
  };

  const convertTables = (markdown: string) => {
    // More robust table regex
    const tableRegex = /(?:^|\n)(\|[^\n]+\|\n\|[\s\-\|:]+\|\n(?:\|[^\n]+\|\n?)*)/gm;
    
    return markdown.replace(tableRegex, (match, table) => {
      const lines = table.trim().split('\n');
      if (lines.length < 3) return match;
      
      const headerLine = lines[0];
      const separatorLine = lines[1];
      const dataLines = lines.slice(2);
      
      // Parse header
      const headers = headerLine.split('|')
        .slice(1, -1) // Remove empty first and last elements
        .map(cell => cell.trim());
      
      // Parse data rows
      const rows = dataLines.map(line => 
        line.split('|')
          .slice(1, -1) // Remove empty first and last elements
          .map(cell => cell.trim())
      ).filter(row => row.length > 0);
      
      // Generate table HTML with GitHub-style styling
      let tableHtml = '\n<div class="my-6 overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">';
      tableHtml += '<table class="w-full border-collapse bg-white dark:bg-gray-900">';
      
      // Header
      tableHtml += '<thead class="bg-gray-50 dark:bg-gray-800">';
      tableHtml += '<tr>';
      headers.forEach(header => {
        tableHtml += `<th class="border-b border-gray-200 dark:border-gray-700 px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">${header}</th>`;
      });
      tableHtml += '</tr>';
      tableHtml += '</thead>';
      
      // Body
      tableHtml += '<tbody class="divide-y divide-gray-200 dark:divide-gray-700">';
      rows.forEach((row, index) => {
        tableHtml += `<tr class="${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">`;
        row.forEach(cell => {
          tableHtml += `<td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">${cell}</td>`;
        });
        tableHtml += '</tr>';
      });
      tableHtml += '</tbody>';
      
      tableHtml += '</table>';
      tableHtml += '</div>\n';
      
      return tableHtml;
    });
  };

  const escapeHtml = (text: string) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  return (
    <div 
      className={`prose prose-lg max-w-none dark:prose-invert markdown-content ${className}`}
      style={{
        lineHeight: '1.75',
        fontSize: '16px'
      }}
      dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }}
    />
  );
};

export default MarkdownRenderer;

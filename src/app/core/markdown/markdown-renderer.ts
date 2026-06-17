function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderInlineMarkdown(value: string): string {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function renderMarkdownBlock(block: string): string {
  const trimmed = block.trim();
  const lines = trimmed.split('\n');

  if (trimmed.startsWith('### ')) {
    return `<h3>${renderInlineMarkdown(trimmed.slice(4))}</h3>`;
  }

  if (trimmed.startsWith('## ')) {
    return `<h2>${renderInlineMarkdown(trimmed.slice(3))}</h2>`;
  }

  if (trimmed.startsWith('# ')) {
    return `<h1>${renderInlineMarkdown(trimmed.slice(2))}</h1>`;
  }

  if (lines.every((line) => /^[-*]\s+/.test(line))) {
    const items = lines
      .map((line) => line.replace(/^[-*]\s+/, ''))
      .map((line) => `<li>${renderInlineMarkdown(line)}</li>`)
      .join('');

    return `<ul>${items}</ul>`;
  }

  if (lines.every((line) => /^\d+\.\s+/.test(line))) {
    const items = lines
      .map((line) => line.replace(/^\d+\.\s+/, ''))
      .map((line) => `<li>${renderInlineMarkdown(line)}</li>`)
      .join('');

    return `<ol>${items}</ol>`;
  }

  return `<p>${lines.map((line) => renderInlineMarkdown(line)).join('<br />')}</p>`;
}

function renderCodeWindow(language: string, code: string): string {
  const safeLanguage = escapeHtml(language || 'code');
  const safeCode = escapeHtml(code.trimEnd());

  return `
    <pre aria-label="${safeLanguage}">
      <button class="code-copy-button" type="button" aria-label="Copy code">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125H5.25a1.125 1.125 0 0 1-1.125-1.125V8.25c0-.621.504-1.125 1.125-1.125h3.375m7.125-3.375H18.75c.621 0 1.125.504 1.125 1.125v12.375c0 .621-.504 1.125-1.125 1.125H9.375a1.125 1.125 0 0 1-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h6.375Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </svg>
      </button>
      <code class="language-${safeLanguage}">${safeCode}</code>
    </pre>
  `.trim();
}

export function renderMarkdown(markdown: string): string {
  const normalized = markdown.replace(/\r\n/g, '\n').trim();

  if (!normalized) {
    return '';
  }

  const codeBlocks: string[] = [];
  const withPlaceholders = normalized.replace(/```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g, (_, language = '', code = '') => {
    codeBlocks.push(renderCodeWindow(language, code));
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  return withPlaceholders
    .split(/\n{2,}/)
    .map((block) => {
      const codeMatch = block.match(/^__CODE_BLOCK_(\d+)__$/);
      if (codeMatch) {
        return codeBlocks[Number(codeMatch[1])];
      }

      return renderMarkdownBlock(block);
    })
    .join('');
}

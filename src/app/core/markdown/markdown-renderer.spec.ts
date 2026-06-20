import { renderMarkdown } from './markdown-renderer';

describe('renderMarkdown', () => {
  it('renders headings, inline formatting, and safe external links', () => {
    const html = renderMarkdown(
      '# Title\n\nA **strong** and *soft* paragraph with `code` and [OpenAI](https://openai.com).',
    );

    expect(html).toContain('<h1>Title</h1>');
    expect(html).toContain('<strong>strong</strong>');
    expect(html).toContain('<em>soft</em>');
    expect(html).toContain('<code>code</code>');
    expect(html).toContain('<a href="https://openai.com" target="_blank" rel="noopener noreferrer">OpenAI</a>');
  });

  it('renders unordered lists, ordered lists, and fenced code blocks', () => {
    const html = renderMarkdown('- one\n- two\n\n1. first\n2. second\n\n```ts\nconst answer = 42;\n```');

    expect(html).toContain('<ul><li>one</li><li>two</li></ul>');
    expect(html).toContain('<ol><li>first</li><li>second</li></ol>');
    expect(html).toContain('<pre aria-label="ts">');
    expect(html).toContain('class="language-ts"');
    expect(html).toContain('const answer = 42;');
  });

  it('escapes unsafe html and returns empty output for blank markdown', () => {
    expect(renderMarkdown('<script>alert("x")</script>')).toContain(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;',
    );
    expect(renderMarkdown('   \n ')).toBe('');
  });
});

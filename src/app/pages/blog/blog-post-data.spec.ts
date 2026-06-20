import { resolveBlogPostBySlug, resolveBlogPosts } from './blog-post-data';

describe('blog post data', () => {
  it('resolves localized posts from base slugs and translation maps', () => {
    const posts = resolveBlogPosts('pt-BR');

    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toEqual(
      expect.objectContaining({
        slug: 'the-most-expensive-frontend-problem-is-confusion',
        title: 'O Problema Mais Caro do Frontend É a Confusão',
        cover: 'blog-images/frontend-confusion.png',
        contentFile: 'blog/frontend-confusion-pt.md',
      }),
    );
  });

  it('resolves a post by slug in the requested locale', () => {
    const post = resolveBlogPostBySlug('en-US', 'frontend-war');

    expect(post).toEqual(
      expect.objectContaining({
        title: 'React vs Angular: The Wrong Frontend War',
        cover: 'blog-images/frontend-war.png',
        contentFile: 'blog/frontend-war-en.md',
      }),
    );
  });

  it('returns undefined for unknown slugs', () => {
    expect(resolveBlogPostBySlug('pt-BR', 'missing-post')).toBeUndefined();
  });
});

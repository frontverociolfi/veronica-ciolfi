import basePosts from './mocks/blog-posts.base.json';
import postsEnUs from './mocks/blog-posts.en-US.json';
import postsPtBr from './mocks/blog-posts.pt-BR.json';
import { I18nService, Locale } from '../../core/i18n/i18n.service';
import { BlogPost, BlogPostBase, BlogPostTranslationsMap } from './models/blog-post';

const localizedPostsByLocale: Record<Locale, BlogPostTranslationsMap> = {
  'pt-BR': postsPtBr as BlogPostTranslationsMap,
  'en-US': postsEnUs as BlogPostTranslationsMap,
};

export function resolveBlogPosts(locale: Locale): ReadonlyArray<BlogPost> {
  const translations = localizedPostsByLocale[locale];

  return (basePosts as ReadonlyArray<BlogPostBase>).map((post) => ({
    ...post,
    ...translations[post.slug],
  })) as ReadonlyArray<BlogPost>;
}

export function resolveBlogPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return resolveBlogPosts(locale).find((post) => post.slug === slug);
}

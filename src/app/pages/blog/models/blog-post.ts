export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  cover: string;
  content: string;
}

export interface BlogPostBase {
  slug: string;
  publishedAt: string;
}

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  cover: string;
  content: string;
}

export type BlogPostTranslationsMap = Record<string, BlogPostTranslation>;

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  cover: string;
  contentFile: string;
}

export interface BlogPostBase {
  slug: string;
}

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  cover: string;
  contentFile: string;
}

export type BlogPostTranslationsMap = Record<string, BlogPostTranslation>;

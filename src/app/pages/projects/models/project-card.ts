export interface ProjectCard {
  slug: string;
  name: string;
  summary: string;
  technologies: string[];
  coverImage: string;
  externalUrl: string;
}

export interface ProjectCardBase {
  slug: string;
  technologies: string[];
  coverImage: string;
  externalUrl: string;
}

export interface ProjectCardTranslation {
  name: string;
  summary: string;
}

export type ProjectCardTranslationsMap = Record<string, ProjectCardTranslation>;

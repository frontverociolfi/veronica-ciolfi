export interface ProjectCard {
  slug: string;
  name: string;
  summary: string;
  technologies: string[];
  imageLabel: string;
  externalUrl: string;
}

export interface ProjectCardBase {
  slug: string;
  technologies: string[];
  externalUrl: string;
}

export interface ProjectCardTranslation {
  name: string;
  summary: string;
  imageLabel: string;
}

export type ProjectCardTranslationsMap = Record<string, ProjectCardTranslation>;

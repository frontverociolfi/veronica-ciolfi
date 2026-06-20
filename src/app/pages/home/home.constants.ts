import blogPostsBase from '../../../../mocks/blog/blog-posts.base.json';
import blogPostsEnUs from '../../../../mocks/blog/blog-posts.en-US.json';
import blogPostsPtBr from '../../../../mocks/blog/blog-posts.pt-BR.json';
import {
  BlogPostBase,
  BlogPostTranslationsMap,
} from '../blog/models/blog-post';
import projectsBase from '../../../../mocks/projects/projects.base.json';
import projectsEnUs from '../../../../mocks/projects/projects.en-US.json';
import projectsPtBr from '../../../../mocks/projects/projects.pt-BR.json';
import {
  ProjectCardBase,
  ProjectCardTranslationsMap,
} from '../projects/models/project-card';
import { Locale } from '../../core/i18n/i18n.service';
import { HomeExperienceItem } from './components/home-experience-card/home-experience-card';
import { HomeSkillItem } from './components/home-skills-card/home-skills-card';

export const HOME_RESUME_PDF_URL_BY_LOCALE: Record<Locale, string> = {
  'pt-BR': 'cv/cv-veronica-ciolfi-pt.pdf',
  'en-US': 'cv/cv-veronica-ciolfi-en.pdf',
};
export const HOME_LINKEDIN_URL = 'https://www.linkedin.com/in/veronica-ciolfi/';
export const HOME_WHATSAPP_URL =
  'https://wa.me/5514991947676?text=Ol%C3%A1,%20vi%20seu%20perfil%20pessoal%20e%20fiquei%20interassado(a)%20nas%20suas%20qualifica%C3%A7%C3%B5es%20profissionais!%20Vamos%20conversar?';
export const HOME_MEETING_GUEST_EMAIL = 'verociolfi@gmail.com';
export const HOME_PROJECTS_HREF = '/projects';
export const HOME_BLOG_HREF = '/blog';
export const HOME_TECHNOLOGIES_PREVIEW_COUNT = 3;
export const HOME_LATEST_ITEMS_COUNT = 2;

export const HOME_EXPERIENCE: ReadonlyArray<HomeExperienceItem> = [
  {
    roleKey: 'home.experience.role1',
    companyKey: 'home.experience.company1',
    periodKey: 'home.experience.period1',
  },
  {
    roleKey: 'home.experience.role2',
    companyKey: 'home.experience.company2',
    periodKey: 'home.experience.period2',
  },
  {
    roleKey: 'home.experience.role3',
    companyKey: 'home.experience.company3',
    periodKey: 'home.experience.period3',
  },
];

export const HOME_SKILLS: ReadonlyArray<HomeSkillItem> = [
  {
    name: 'Angular',
    level: 95,
    icon: 'remixAngularjsFill',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: 'heroCodeBracket',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'Node.js',
    level: 82,
    icon: 'heroCpuChip',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'Foco em UI',
    level: 94,
    icon: 'remixFunctionAddFill',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'ReactJS',
    level: 82,
    icon: 'remixReactjsFill',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'Java',
    level: 59,
    icon: 'remixJavaFill',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'Engenharia de Prompt',
    level: 71,
    icon: 'remixMessageAi3Line',
    color: 'var(--color-skill-bar)',
  },
  {
    name: 'Azure - CI/CD',
    level: 61,
    icon: 'remixCloudFill',
    color: 'var(--color-skill-bar)',
  },
];

export const HOME_STACK: ReadonlyArray<string> = [
  'Angular',
  'TypeScript',
  'RxJS',
  'NgRX',
  'SSR',
  'Vitest',
  'React.js',
  'Java',
  'Git',
  'Spring Boot',
  'Jest',
  'SCSS / Sass',
  'Tailwind',
  'GitHub Actions',
  'MySQL',
  'SonarCloud',
  'SonarQube',
  'Next.js',
  'Node.js',
  'Docker',
  'Cypress',
  'GraphQL',
  'Storybook',
];

export const HOME_BLOG_POSTS_BASE = blogPostsBase as ReadonlyArray<BlogPostBase>;
export const HOME_PROJECTS_BASE = projectsBase as ReadonlyArray<ProjectCardBase>;

export const HOME_BLOG_TRANSLATIONS_BY_LOCALE: Record<Locale, BlogPostTranslationsMap> = {
  'pt-BR': blogPostsPtBr as BlogPostTranslationsMap,
  'en-US': blogPostsEnUs as BlogPostTranslationsMap,
};

export const HOME_PROJECT_TRANSLATIONS_BY_LOCALE: Record<Locale, ProjectCardTranslationsMap> = {
  'pt-BR': projectsPtBr as ProjectCardTranslationsMap,
  'en-US': projectsEnUs as ProjectCardTranslationsMap,
};

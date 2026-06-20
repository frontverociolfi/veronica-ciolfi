import { Locale } from '../../core/i18n/i18n.service';
import baseProjects from '../../../../mocks/projects/projects.base.json';
import projectsEnUs from '../../../../mocks/projects/projects.en-US.json';
import projectsPtBr from '../../../../mocks/projects/projects.pt-BR.json';
import { ProjectCardBase, ProjectCardTranslationsMap } from './models/project-card';

export const PROJECTS_BASE = baseProjects as ReadonlyArray<ProjectCardBase>;

export const PROJECTS_TRANSLATIONS_BY_LOCALE: Record<Locale, ProjectCardTranslationsMap> = {
  'pt-BR': projectsPtBr as ProjectCardTranslationsMap,
  'en-US': projectsEnUs as ProjectCardTranslationsMap,
};

export const HAS_PROJECTS = PROJECTS_BASE.length > 0;

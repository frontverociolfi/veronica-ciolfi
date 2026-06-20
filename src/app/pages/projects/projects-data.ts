import { Locale } from '../../core/i18n/i18n.service';
import { toPublicAssetPath } from '../../core/assets/public-asset-path';
import {
  PROJECTS_BASE,
  PROJECTS_TRANSLATIONS_BY_LOCALE,
} from './projects.constants';
import { ProjectCard, ProjectCardBase } from './models/project-card';

export function resolveProjects(locale: Locale): ReadonlyArray<ProjectCard> {
  const translations = PROJECTS_TRANSLATIONS_BY_LOCALE[locale];

  return (PROJECTS_BASE as ReadonlyArray<ProjectCardBase>).map((project) => {
    const localizedProject = translations[project.slug];

    return {
      ...project,
      ...localizedProject,
      coverImage: toPublicAssetPath(project.coverImage),
    };
  }) as ReadonlyArray<ProjectCard>;
}

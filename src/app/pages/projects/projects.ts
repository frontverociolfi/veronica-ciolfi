import { Component, computed, signal } from '@angular/core';
import baseProjects from './mocks/projects.base.json';
import projectsEnUs from './mocks/projects.en-US.json';
import projectsPtBr from './mocks/projects.pt-BR.json';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery';
import { ProjectCard, ProjectCardBase, ProjectCardTranslationsMap } from './models/project-card';
import { PaginationControlsComponent } from '../../components/pagination-controls/pagination-controls';
import { I18nService, Locale } from '../../core/i18n/i18n.service';

const localizedProjectsByLocale: Record<Locale, ProjectCardTranslationsMap> = {
  'pt-BR': projectsPtBr as ProjectCardTranslationsMap,
  'en-US': projectsEnUs as ProjectCardTranslationsMap,
};

@Component({
  selector: 'vc-projects',
  imports: [ProjectGalleryComponent, PaginationControlsComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  readonly projects = computed(() => {
    const translations = localizedProjectsByLocale[this.i18n.locale()];

    return (baseProjects as ReadonlyArray<ProjectCardBase>).map((project) => ({
      ...project,
      ...translations[project.slug],
    })) as ReadonlyArray<ProjectCard>;
  });

  readonly pageSize = 2;
  readonly currentPage = signal(1);
  readonly totalPages = computed(() => Math.ceil(this.projects().length / this.pageSize));
  readonly paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.projects().slice(start, start + this.pageSize);
  });

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  constructor(readonly i18n: I18nService) {}
}

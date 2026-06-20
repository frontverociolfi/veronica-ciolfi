import { Component, computed, signal } from '@angular/core';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery';
import { ProjectCard } from './models/project-card';
import { PaginationControlsComponent } from '../../components/pagination-controls/pagination-controls';
import { I18nService } from '../../core/i18n/i18n.service';
import {
  HAS_PROJECTS,
  PROJECTS_BASE,
  PROJECTS_TRANSLATIONS_BY_LOCALE,
} from './projects.constants';

@Component({
  selector: 'vc-projects',
  imports: [ProjectGalleryComponent, PaginationControlsComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  readonly hasProjects = HAS_PROJECTS;
  readonly projects = computed(() => {
    const translations = PROJECTS_TRANSLATIONS_BY_LOCALE[this.i18n.locale()];

    return PROJECTS_BASE.map((project) => ({
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

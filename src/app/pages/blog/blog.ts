import { Component, computed, signal } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list';
import { PaginationControlsComponent } from '../../components/pagination-controls/pagination-controls';
import { I18nService } from '../../core/i18n/i18n.service';
import { resolveBlogPosts } from './blog-post-data';

@Component({
  selector: 'vc-blog',
  imports: [PostListComponent, PaginationControlsComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class BlogComponent {
  readonly posts = computed(() => resolveBlogPosts(this.i18n.locale()));

  readonly pageSize = 4;
  readonly currentPage = signal(1);
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.posts().length / this.pageSize)));
  readonly paginatedPosts = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.posts().slice(start, start + this.pageSize);
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

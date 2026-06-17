import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'vc-pagination-controls',
  templateUrl: './pagination-controls.html',
  styleUrl: './pagination-controls.css',
})
export class PaginationControlsComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Input() totalItems = 0;
  @Input() ariaLabel = 'Pagination';

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  constructor(readonly i18n: I18nService) {}
}

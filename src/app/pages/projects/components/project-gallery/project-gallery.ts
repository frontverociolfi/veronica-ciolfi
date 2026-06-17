import { Component, Input } from '@angular/core';
import { ProjectCard } from '../../models/project-card';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-project-gallery',
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.css',
})
export class ProjectGalleryComponent {
  @Input() projects: ReadonlyArray<ProjectCard> = [];

  constructor(readonly i18n: I18nService) {}
}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/i18n/i18n.service';

export interface HomeLatestProjectItem {
  slug: string;
  name: string;
  summary: string;
  technologies: string[];
  href: string;
}

@Component({
  selector: 'vc-home-latest-projects-card',
  imports: [RouterLink],
  templateUrl: './home-latest-projects-card.html',
  styleUrl: './home-latest-projects-card.css',
})
export class HomeLatestProjectsCardComponent {
  @Input() projects: ReadonlyArray<HomeLatestProjectItem> = [];

  constructor(readonly i18n: I18nService) {}
}

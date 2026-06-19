import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowUpRight } from '@ng-icons/heroicons/outline';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-resume-card',
  imports: [NgIcon],
  providers: [provideIcons({ heroArrowUpRight })],
  templateUrl: './home-resume-card.html',
  styleUrl: './home-resume-card.css',
})
export class HomeResumeCardComponent {
  @Input() resumePdfUrl = '';

  constructor(readonly i18n: I18nService) {}
}

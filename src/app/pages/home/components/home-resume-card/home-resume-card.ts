import { Component, computed } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowUpRight } from '@ng-icons/heroicons/outline';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { HOME_RESUME_PDF_URL_BY_LOCALE } from '../../home.constants';

@Component({
  selector: 'vc-home-resume-card',
  imports: [NgIcon],
  providers: [provideIcons({ heroArrowUpRight })],
  templateUrl: './home-resume-card.html',
  styleUrl: './home-resume-card.css',
})
export class HomeResumeCardComponent {
  readonly resumePdfUrl = computed(() => HOME_RESUME_PDF_URL_BY_LOCALE[this.i18n.locale()]);

  constructor(readonly i18n: I18nService) {}
}

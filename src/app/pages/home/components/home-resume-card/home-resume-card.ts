import { Component, Input } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-resume-card',
  templateUrl: './home-resume-card.html',
  styleUrl: './home-resume-card.css',
})
export class HomeResumeCardComponent {
  @Input() resumePdfUrl = '';

  constructor(readonly i18n: I18nService) {}
}

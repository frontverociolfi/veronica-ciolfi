import { Component, Input } from '@angular/core';
import { I18nService, TranslationKey } from '../../../../core/i18n/i18n.service';

export interface HomeExperienceItem {
  roleKey: TranslationKey;
  companyKey: TranslationKey;
  periodKey: TranslationKey;
}

@Component({
  selector: 'vc-home-experience-card',
  templateUrl: './home-experience-card.html',
  styleUrl: './home-experience-card.css',
})
export class HomeExperienceCardComponent {
  @Input() experience: ReadonlyArray<HomeExperienceItem> = [];

  constructor(readonly i18n: I18nService) {}
}

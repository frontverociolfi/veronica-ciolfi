import { Component } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-intro-card',
  templateUrl: './home-intro-card.html',
  styleUrl: './home-intro-card.css',
})
export class HomeIntroCardComponent {
  constructor(readonly i18n: I18nService) {}
}

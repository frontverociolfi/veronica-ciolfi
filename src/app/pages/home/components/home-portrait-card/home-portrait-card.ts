import { Component } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-portrait-card',
  templateUrl: './home-portrait-card.html',
  styleUrl: './home-portrait-card.css',
})
export class HomePortraitCardComponent {
  constructor(readonly i18n: I18nService) {}
}

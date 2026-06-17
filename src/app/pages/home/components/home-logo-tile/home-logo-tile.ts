import { Component } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-logo-tile',
  templateUrl: './home-logo-tile.html',
  styleUrl: './home-logo-tile.css',
})
export class HomeHeroLogoTileComponent {
  constructor(readonly i18n: I18nService) {}
}

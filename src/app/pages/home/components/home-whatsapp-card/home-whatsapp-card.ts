import { Component, Input } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-whatsapp-card',
  templateUrl: './home-whatsapp-card.html',
  styleUrl: './home-whatsapp-card.css',
})
export class HomeWhatsappCardComponent {
  @Input() whatsappUrl = '';

  constructor(readonly i18n: I18nService) {}
}

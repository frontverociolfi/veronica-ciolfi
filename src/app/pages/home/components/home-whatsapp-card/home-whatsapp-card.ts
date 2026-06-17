import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixWhatsappFill } from '@ng-icons/remixicon';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-whatsapp-card',
  imports: [NgIcon],
  providers: [provideIcons({ remixWhatsappFill })],
  templateUrl: './home-whatsapp-card.html',
  styleUrl: './home-whatsapp-card.css',
})
export class HomeWhatsappCardComponent {
  @Input() whatsappUrl = '';

  constructor(readonly i18n: I18nService) {}
}

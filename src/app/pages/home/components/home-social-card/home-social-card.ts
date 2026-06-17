import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixLinkedinFill } from '@ng-icons/remixicon';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-social-card',
  imports: [NgIcon],
  providers: [provideIcons({ remixLinkedinFill })],
  templateUrl: './home-social-card.html',
  styleUrl: './home-social-card.css',
})
export class HomeSocialCardComponent {
  @Input() linkedinUrl = '';

  constructor(readonly i18n: I18nService) {}
}

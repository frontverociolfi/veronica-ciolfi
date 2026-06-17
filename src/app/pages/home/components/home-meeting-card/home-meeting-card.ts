import { Component, Input } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-meeting-card',
  templateUrl: './home-meeting-card.html',
  styleUrl: './home-meeting-card.css',
})
export class HomeMeetingCardComponent {
  @Input() meetingUrl = '';

  constructor(readonly i18n: I18nService) {}
}

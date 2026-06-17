import { Component, Input } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-home-stack-card',
  templateUrl: './home-stack-card.html',
  styleUrl: './home-stack-card.css',
})
export class HomeStackCardComponent {
  @Input() stack: ReadonlyArray<string> = [];

  readonly repeats = [0, 1, 2, 3];

  constructor(readonly i18n: I18nService) {}
}

import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { flagBr, flagUs } from '@ng-icons/flag-icons';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'vc-language-toggle',
  imports: [NgIcon],
  providers: [provideIcons({ flagBr, flagUs })],
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.css',
})
export class LanguageToggleComponent {
  constructor(readonly i18n: I18nService) {}
}

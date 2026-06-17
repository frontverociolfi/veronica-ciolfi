import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';
import { I18nService } from '../../core/i18n/i18n.service';
import { ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'vc-theme-toggle',
  imports: [NgIcon],
  providers: [provideIcons({ heroMoon, heroSun })],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggleComponent {
  constructor(
    readonly i18n: I18nService,
    readonly theme: ThemeService,
  ) {}
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { I18nService, TranslationKey } from '../../core/i18n/i18n.service';
import {
  heroBriefcase,
  heroCommandLine,
  heroEnvelope,
  heroPaperClip,
  heroHome,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'vc-menu',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  providers: [
    provideIcons({
      heroBriefcase,
      heroCommandLine,
      heroEnvelope,
      heroHome,
      heroPaperClip
    }),
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  constructor(readonly i18n: I18nService) {}

  readonly items: ReadonlyArray<{ labelKey: TranslationKey; path: string; icon: string }> = [
    { labelKey: 'menu.home', path: '/', icon: 'heroHome' },
    { labelKey: 'menu.projects', path: '/projects', icon: 'heroCommandLine' },
    { labelKey: 'menu.blog', path: '/blog', icon: 'heroPaperClip' },
  ];
}

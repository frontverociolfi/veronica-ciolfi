import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracket,
  heroCommandLine,
  heroCpuChip,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { I18nService, TranslationKey } from '../../core/i18n/i18n.service';


@Component({
  selector: 'vc-home',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCommandLine,
      heroCpuChip,
      heroRocketLaunch,
    }),
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly resumePdfUrl = '/cv-veronica-ciolfi.pdf';

  readonly experience: ReadonlyArray<{
    roleKey: TranslationKey;
    companyKey: TranslationKey;
    periodKey: TranslationKey;
  }> = [
    {
      roleKey: 'home.experience.role1',
      companyKey: 'home.experience.company1',
      periodKey: 'home.experience.period1',
    },
    {
      roleKey: 'home.experience.role2',
      companyKey: 'home.experience.company2',
      periodKey: 'home.experience.period2',
    },
    {
      roleKey: 'home.experience.role3',
      companyKey: 'home.experience.company3',
      periodKey: 'home.experience.period3',
    },
  ];

  readonly skills = [
    {
      name: 'Angular',
      level: 95,
      icon: 'heroCodeBracket',
      color: 'var(--color-vibrant-coral)',
    },
    {
      name: 'TypeScript',
      level: 90,
      icon: 'heroCommandLine',
      color: 'var(--color-teal)',
    },
    {
      name: 'Node.js',
      level: 82,
      icon: 'heroCpuChip',
      color: 'var(--color-pale-sky)',
    },
    {
      name: 'Creative UI',
      level: 88,
      icon: 'heroRocketLaunch',
      color: 'var(--color-flag-red)',
    },
  ];

  readonly stack = ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'SSR', 'Vitest', 'CSS'];
  readonly stackLoop = [0, 1, 2, 3];

  constructor(readonly i18n: I18nService) {}
}

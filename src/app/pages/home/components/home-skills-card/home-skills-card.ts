import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracket,
  heroCommandLine,
  heroCpuChip,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { I18nService } from '../../../../core/i18n/i18n.service';

export interface HomeSkillItem {
  name: string;
  level: number;
  icon: 'heroCodeBracket' | 'heroCommandLine' | 'heroCpuChip' | 'heroRocketLaunch';
  color: string;
}

@Component({
  selector: 'vc-home-skills-card',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCommandLine,
      heroCpuChip,
      heroRocketLaunch,
    }),
  ],
  templateUrl: './home-skills-card.html',
  styleUrl: './home-skills-card.css',
})
export class HomeSkillsCardComponent {
  @Input() skills: ReadonlyArray<HomeSkillItem> = [];

  constructor(readonly i18n: I18nService) {}
}

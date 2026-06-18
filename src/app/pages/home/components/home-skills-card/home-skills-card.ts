import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracket,
  heroCommandLine,
  heroCpuChip,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { remixAngularjsFill, remixCloudFill, remixFunctionAddFill, remixJavaFill, remixJavascriptFill, remixMessageAi3Line, remixReactjsFill } from '@ng-icons/remixicon';
import { PLATFORM_ID } from '@angular/core';

export interface HomeSkillItem {
  name: string;
  level: number;
  icon: string;
  color: string;
}

type SkillColumn = 'left' | 'right';
type AnimatedSkill = { key: string; level: number; delayIndex: number };

@Component({
  selector: 'vc-home-skills-card',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCommandLine,
      heroCpuChip,
      heroRocketLaunch,
      remixAngularjsFill,
      remixJavascriptFill,
      remixReactjsFill,
      remixJavaFill,
      remixCloudFill,
      remixMessageAi3Line,
      remixFunctionAddFill
    }),
  ],
  templateUrl: './home-skills-card.html',
  styleUrl: './home-skills-card.css',
})
export class HomeSkillsCardComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() skillsLeft: ReadonlyArray<HomeSkillItem> = [];
  @Input() skillsRight: ReadonlyArray<HomeSkillItem> = [];

  private readonly platformId = inject(PLATFORM_ID);
  private readonly animatedLevels = signal<Record<string, number>>({});
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private animationFrameId: number | null = null;
  private viewReady = false;

  constructor(readonly i18n: I18nService) {}

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.startSkillAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['skillsLeft'] || changes['skillsRight']) && this.viewReady) {
      this.startSkillAnimation();
    }
  }

  ngOnDestroy(): void {
    this.cancelAnimation();
  }

  skillKey(column: SkillColumn, index: number, skill: HomeSkillItem): string {
    return `${column}-${index}-${skill.name}`;
  }

  skillDelayIndex(column: SkillColumn, index: number): number {
    return column === 'left' ? index : this.skillsLeft.length + index;
  }

  displayedSkillLevel(key: string, fallback: number): number {
    return this.animatedLevels()[key] ?? fallback;
  }

  private startSkillAnimation(): void {
    const entries = this.getAnimatedSkills();
    const finalLevels = Object.fromEntries(entries.map((entry) => [entry.key, entry.level]));

    if (!this.isBrowser || this.prefersReducedMotion()) {
      this.animatedLevels.set(finalLevels);
      return;
    }

    this.cancelAnimation();
    this.animatedLevels.set(Object.fromEntries(entries.map((entry) => [entry.key, 0])));

    const startTime = performance.now();
    const durationMs = 5000;
    const staggerMs = 300;

    const step = (now: number) => {
      let finished = true;
      const nextLevels: Record<string, number> = {};

      for (const entry of entries) {
        const elapsed = now - startTime - entry.delayIndex * staggerMs;
        const progress = Math.min(Math.max(elapsed / durationMs, 0), 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        nextLevels[entry.key] = Math.round(entry.level * easedProgress);

        if (progress < 1) {
          finished = false;
        }
      }

      this.animatedLevels.set(nextLevels);

      if (!finished) {
        this.animationFrameId = requestAnimationFrame(step);
      } else {
        this.animationFrameId = null;
      }
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  private getAnimatedSkills(): ReadonlyArray<AnimatedSkill> {
    const left = this.skillsLeft.map((skill, index) => ({
      key: this.skillKey('left', index, skill),
      level: skill.level,
      delayIndex: this.skillDelayIndex('left', index),
    }));

    const right = this.skillsRight.map((skill, index) => ({
      key: this.skillKey('right', index, skill),
      level: skill.level,
      delayIndex: this.skillDelayIndex('right', index),
    }));

    return [...left, ...right];
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private cancelAnimation(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'vc-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>('dark');
  private readonly isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setMode(this.getInitialMode(), false);
  }

  toggle(): void {
    this.setMode(this.mode() === 'dark' ? 'light' : 'dark');
  }

  setMode(mode: ThemeMode, persist = true): void {
    this.mode.set(mode);
    this.document.documentElement?.setAttribute('data-theme', mode);

    if (this.isBrowser && persist) {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    }
  }

  private getInitialMode(): ThemeMode {
    if (!this.isBrowser) {
      return 'dark';
    }

    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedMode === 'dark' || storedMode === 'light') {
      return storedMode;
    }

    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}

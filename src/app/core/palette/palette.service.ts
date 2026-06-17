import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type PaletteMode = 'graphite' | 'eggshell' | 'regal';

const PALETTE_STORAGE_KEY = 'vc-palette';

@Injectable({ providedIn: 'root' })
export class PaletteService {
  readonly palette = signal<PaletteMode>('graphite');
  private readonly isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setPalette(this.getInitialPalette(), false);
  }

  setPalette(palette: PaletteMode, persist = true): void {
    this.palette.set(palette);
    this.document.documentElement?.setAttribute('data-palette', palette);

    if (this.isBrowser && persist) {
      localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    }
  }

  toggleNext(): void {
    const order: PaletteMode[] = ['graphite', 'eggshell', 'regal'];
    const currentIndex = order.indexOf(this.palette());
    this.setPalette(order[(currentIndex + 1) % order.length]);
  }

  private getInitialPalette(): PaletteMode {
    if (!this.isBrowser) {
      return 'graphite';
    }

    const storedPalette = localStorage.getItem(PALETTE_STORAGE_KEY);

    if (storedPalette === 'graphite' || storedPalette === 'eggshell' || storedPalette === 'regal') {
      return storedPalette;
    }

    return 'graphite';
  }
}

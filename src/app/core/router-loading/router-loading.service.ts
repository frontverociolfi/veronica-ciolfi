import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouterLoadingService {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly minVisibleMs = 720;
  private activeNavigations = 0;
  private visibleAt = 0;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  readonly isVisible = signal(false);

  constructor() {
    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.handleNavigationStart();
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError ||
        event instanceof NavigationSkipped
      ) {
        this.handleNavigationEnd();
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      this.clearHideTimer();
    });
  }

  private handleNavigationStart(): void {
    this.activeNavigations += 1;

    if (this.activeNavigations !== 1) {
      return;
    }

    this.clearHideTimer();

    if (this.isVisible()) {
      return;
    }

    this.visibleAt = Date.now();
    this.isVisible.set(true);
  }

  private handleNavigationEnd(): void {
    this.activeNavigations = Math.max(0, this.activeNavigations - 1);

    if (this.activeNavigations > 0) {
      return;
    }

    if (!this.isVisible()) {
      return;
    }

    const elapsed = Date.now() - this.visibleAt;
    const remaining = Math.max(0, this.minVisibleMs - elapsed);

    this.clearHideTimer();
    this.hideTimer = globalThis.setTimeout(() => {
      this.isVisible.set(false);
      this.hideTimer = null;
    }, remaining);
  }

  private clearHideTimer(): void {
    if (!this.hideTimer) {
      return;
    }

    clearTimeout(this.hideTimer);
    this.hideTimer = null;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';
import { RouterLoadingService } from '../../core/router-loading/router-loading.service';
import { PaletteSwitchComponent } from '../palette-switch/palette-switch';
import { LoadingOverlayComponent } from '../loading-overlay/loading-overlay';
import { LanguageToggleComponent } from '../language-toggle/language-toggle';
import { MenuComponent } from '../menu/menu';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'vc-shell',
  imports: [
    LoadingOverlayComponent,
    LanguageToggleComponent,
    MenuComponent,
    RouterOutlet,
    ThemeToggleComponent,
    PaletteSwitchComponent,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class ShellComponent {
  constructor(
    readonly i18n: I18nService,
    readonly routerLoading: RouterLoadingService,
  ) {}
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';
import { LanguageToggleComponent } from '../language-toggle/language-toggle';
import { MenuComponent } from '../menu/menu';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'vc-shell',
  imports: [
    LanguageToggleComponent,
    MenuComponent,
    RouterOutlet,
    ThemeToggleComponent,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class ShellComponent {
  constructor(readonly i18n: I18nService) {}
}

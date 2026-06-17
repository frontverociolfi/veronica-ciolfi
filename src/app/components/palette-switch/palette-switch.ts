import { Component } from '@angular/core';
import { PaletteService } from '../../core/palette/palette.service';

type PaletteOption = {
  id: 'graphite' | 'eggshell' | 'regal';
  label: string;
  colors: [string, string];
};

@Component({
  selector: 'vc-palette-switch',
  templateUrl: './palette-switch.html',
  styleUrl: './palette-switch.css',
})
export class PaletteSwitchComponent {
  readonly palettes: ReadonlyArray<PaletteOption> = [
    {
      id: 'graphite',
      label: 'Graphite',
      colors: ['#2d3142', '#ef8354'],
    },
    {
      id: 'eggshell',
      label: 'Eggshell',
      colors: ['#f4f1de', '#e07a5f'],
    },
    {
      id: 'regal',
      label: 'Regal Navy',
      colors: ['#0d3b66', '#f95738'],
    },
  ];

  constructor(readonly palette: PaletteService) {}
}

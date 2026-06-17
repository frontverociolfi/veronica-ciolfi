import { Component, input } from '@angular/core';

@Component({
  selector: 'vc-loading-overlay',
  templateUrl: './loading-overlay.html',
  styleUrl: './loading-overlay.css',
})
export class LoadingOverlayComponent {
  readonly active = input(false);
  readonly label = input('Loading');
}

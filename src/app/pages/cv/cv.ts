import { Component } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'vc-cv',
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class CvComponent {
  constructor(readonly i18n: I18nService) {}
}

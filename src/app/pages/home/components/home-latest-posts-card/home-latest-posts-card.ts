import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/i18n/i18n.service';

export interface HomeLatestPostItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  href: string;
}

@Component({
  selector: 'vc-home-latest-posts-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './home-latest-posts-card.html',
  styleUrl: './home-latest-posts-card.css',
})
export class HomeLatestPostsCardComponent {
  @Input() posts: ReadonlyArray<HomeLatestPostItem> = [];

  constructor(readonly i18n: I18nService) {}
}

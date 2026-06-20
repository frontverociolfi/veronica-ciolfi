import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../models/blog-post';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'vc-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {
  @Input() posts: ReadonlyArray<BlogPost> = [];

  constructor(readonly i18n: I18nService) {}

  isCoverImage(cover: string): boolean {
    return /\.(apng|avif|gif|jpe?g|png|svg|webp)$/i.test(cover);
  }
}

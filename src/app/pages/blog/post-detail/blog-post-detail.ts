import { DatePipe } from '@angular/common';
import { Component, ElementRef, computed, inject, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { renderMarkdown } from '../../../core/markdown/markdown-renderer';
import { I18nService } from '../../../core/i18n/i18n.service';
import { resolveBlogPostBySlug } from '../blog-post-data';

@Component({
  selector: 'vc-blog-post-detail',
  imports: [DatePipe, RouterLink, NgIcon],
  templateUrl: './blog-post-detail.html',
  styleUrl: './blog-post-detail.css',
  providers: [provideIcons({ heroArrowLeft })],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params: ParamMap) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  readonly post = computed(() => resolveBlogPostBySlug(this.i18n.locale(), this.slug()));
  readonly renderedContent = computed<SafeHtml>(() => {
    const post = this.post();
    return post ? this.sanitizer.bypassSecurityTrustHtml(renderMarkdown(post.content)) : '';
  });

  async onContentClick(event: Event): Promise<void> {
    const target = event.target as HTMLElement | null;
    const button = target?.closest('.code-copy-button') as HTMLButtonElement | null;

    if (!button) {
      return;
    }

    const pre = button.closest('pre');
    const code = pre?.querySelector('code')?.textContent ?? '';

    if (!code) {
      return;
    }

    await this.copyToClipboard(code);
    button.setAttribute('aria-label', this.i18n.t('blog.copiedCode'));
    button.dataset['copied'] = 'true';

    window.setTimeout(() => {
      if (!this.elementRef.nativeElement.contains(button)) {
        return;
      }

      button.setAttribute('aria-label', this.i18n.t('blog.copyCode'));
      delete button.dataset['copied'];
    }, 1600);
  }

  constructor(readonly i18n: I18nService) {}

  private async copyToClipboard(value: string): Promise<void> {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
      }
    } catch {
      // Falls back to execCommand for environments where Clipboard API is blocked.
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

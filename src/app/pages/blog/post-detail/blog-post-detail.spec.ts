import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { convertToParamMap, ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { BlogPostDetailComponent } from './blog-post-detail';

describe('BlogPostDetailComponent', () => {
  let fixture: ComponentFixture<BlogPostDetailComponent>;
  let component: BlogPostDetailComponent;
  let httpMock: HttpTestingController;

  const markdown = `
# O Problema Mais Caro do Frontend É a Confusão

## Um pequeno padrÃ£o de componente

\`\`\`ts
export class QuietLayoutComponent {
  density = 'comfortable';
}
\`\`\`
`;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ slug: 'the-most-expensive-frontend-problem-is-confusion' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPostDetailComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    httpMock.expectOne('blog/frontend-confusion-pt.md').flush(markdown);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('renders the localized post title', () => {
    expect(fixture.nativeElement.textContent).toContain('O Problema Mais Caro do Frontend É a Confusão');
  });

  it('renders markdown code blocks as preformatted code', () => {
    const codeBlock = fixture.nativeElement.querySelector('pre code');
    const codeWindow = fixture.nativeElement.querySelector('pre');

    expect(codeBlock?.textContent).toContain('export class QuietLayoutComponent');
    expect(codeWindow?.getAttribute('aria-label')).toBe('ts');
  });

  it('renders the post cover image when cover is an image path', () => {
    const image: HTMLImageElement | null = fixture.nativeElement.querySelector(
      '.post-cover-image img[src="blog-images/frontend-confusion.png"]',
    );

    expect(image?.getAttribute('alt')).toBe('O Problema Mais Caro do Frontend É a Confusão');
  });

  it('copies the code block content when clicking the copy button', async () => {
    const calls: string[] = [];
    const writeText = (value: string) => {
      calls.push(value);
      return Promise.resolve();
    };

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    const button: HTMLButtonElement | null = fixture.nativeElement.querySelector('.code-copy-button');
    expect(button).not.toBeNull();

    button?.click();
    await fixture.whenStable();

    expect(calls.length).toBe(1);
    expect(calls[0]).toContain('export class QuietLayoutComponent');
    expect(button?.dataset['copied']).toBe('true');
  });
});

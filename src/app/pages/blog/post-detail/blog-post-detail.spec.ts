import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap, ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { BlogPostDetailComponent } from './blog-post-detail';

describe('BlogPostDetailComponent', () => {
  let fixture: ComponentFixture<BlogPostDetailComponent>;
  let component: BlogPostDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ slug: 'building-quiet-angular-interfaces' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the localized post title', () => {
    expect(fixture.nativeElement.textContent).toContain('Construindo interfaces Angular silenciosas');
  });

  it('renders markdown code blocks as preformatted code', () => {
    const codeBlock = fixture.nativeElement.querySelector('pre code');
    const codeWindow = fixture.nativeElement.querySelector('pre');

    expect(codeBlock?.textContent).toContain('export class QuietLayoutComponent');
    expect(codeWindow?.getAttribute('aria-label')).toBe('ts');
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

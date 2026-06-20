import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PostListComponent } from './post-list';

describe('PostListComponent', () => {
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    fixture.componentInstance.posts = [
      {
        slug: 'test-post',
        title: 'Test Post',
        excerpt: 'A mocked excerpt',
        category: 'Frontend',
        readingTime: '6 min read',
        cover: 'interface systems',
        contentFile: '/blog/test-post.md',
      },
      {
        slug: 'image-post',
        title: 'Image Post',
        excerpt: 'A post with a cover image',
        category: 'Angular',
        readingTime: '5 min read',
        cover: '/blog-images/angular-21-small-changes.png',
        contentFile: '/blog/image-post.md',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the provided post', () => {
    expect(fixture.nativeElement.textContent).toContain('Test Post');
  });

  it('renders image covers as images', () => {
    const image: HTMLImageElement | null = fixture.nativeElement.querySelector(
      '.post-cover img[src="/blog-images/angular-21-small-changes.png"]',
    );

    expect(image).not.toBeNull();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeLatestPostsCardComponent } from './home-latest-posts-card';

describe('HomeLatestPostsCardComponent', () => {
  let fixture: ComponentFixture<HomeLatestPostsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLatestPostsCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLatestPostsCardComponent);
    fixture.componentInstance.posts = [
      {
        slug: 'building-quiet-angular-interfaces',
        title: 'Building Quiet Angular Interfaces',
        excerpt: 'Notes on reducing visual noise.',
        category: 'Frontend',
        publishedAt: '2026-06-10',
        href: '/blog',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the post preview', () => {
    expect(fixture.nativeElement.textContent).toContain('Building Quiet Angular Interfaces');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeLatestPostsCardComponent } from './home-latest-posts-card';

describe('HomeLatestPostsCardComponent', () => {
  let fixture: ComponentFixture<HomeLatestPostsCardComponent>;
  let component: HomeLatestPostsCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLatestPostsCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLatestPostsCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    component.posts = [
      {
        slug: 'building-quiet-angular-interfaces',
        title: 'Building Quiet Angular Interfaces',
        excerpt: 'Notes on reducing visual noise.',
        category: 'Frontend',
        cover: 'interface systems',
        href: '/blog/building-quiet-angular-interfaces',
      },
      {
        slug: 'designing-for-developer-flow',
        title: 'Designing for Developer Flow',
        excerpt: 'How small UX choices can remove friction.',
        category: 'Product',
        cover: '/blog-images/angular-21-small-changes.png',
        href: '/blog/designing-for-developer-flow',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the translated aria label, label, title, and CTA in pt-BR', () => {
    const card = host.querySelector('.latest-card');

    expect(card?.getAttribute('aria-label')).toBe('Previa dos ultimos posts');
    expect(host.textContent).toContain('Blog');
    expect(host.textContent).toContain('Ultimos posts.');
    expect(host.textContent).toContain('Abrir blog');
  });

  it('renders one preview card per post with category, title, and excerpt', () => {
    const itemCards = host.querySelectorAll('.item-card');

    expect(itemCards.length).toBe(2);
    expect(itemCards[0].textContent).toContain('Frontend');
    expect(itemCards[0].textContent).toContain('Building Quiet Angular Interfaces');
    expect(itemCards[0].textContent).toContain('Notes on reducing visual noise.');
    expect(itemCards[1].textContent).toContain('Product');
    expect(itemCards[1].textContent).toContain('Designing for Developer Flow');
  });

  it('renders image covers as thumbnails', () => {
    const image: HTMLImageElement | null = host.querySelector(
      '.item-cover img[src="/blog-images/angular-21-small-changes.png"]',
    );

    expect(image).not.toBeNull();
  });

  it('uses router links for both the blog CTA and each preview card', () => {
    const links = Array.from(host.querySelectorAll('a')) as HTMLAnchorElement[];

    expect(links.length).toBe(3);
    expect(links[0].getAttribute('href')).toBe('/blog');
    expect(links[1].getAttribute('href')).toBe('/blog/building-quiet-angular-interfaces');
    expect(links[2].getAttribute('href')).toBe('/blog/designing-for-developer-flow');
  });

  it('updates the translated static copy when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const card = host.querySelector('.latest-card');

    expect(card?.getAttribute('aria-label')).toBe('Latest posts preview');
    expect(host.textContent).toContain('Latest posts.');
    expect(host.textContent).toContain('Open blog');
  });

  it('renders no preview cards when the posts input is empty', () => {
    fixture.componentRef.setInput('posts', []);
    fixture.detectChanges();

    expect(host.querySelectorAll('.item-card').length).toBe(0);
    expect(host.querySelector('.item-list')).toBeTruthy();
  });
});

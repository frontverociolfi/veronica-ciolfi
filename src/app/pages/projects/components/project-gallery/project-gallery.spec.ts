import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectGalleryComponent } from './project-gallery';

describe('ProjectGalleryComponent', () => {
  let fixture: ComponentFixture<ProjectGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectGalleryComponent);
    fixture.componentInstance.projects = [
      {
        slug: 'test-project',
        name: 'Test Project',
        summary: 'A mocked summary',
        technologies: ['Angular', 'TypeScript'],
        coverImage: '/blog-images/frontend-arch.png',
        externalUrl: 'https://example.com',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the provided project cover and content', () => {
    expect(fixture.nativeElement.textContent).toContain('Test Project');
    expect(fixture.nativeElement.querySelector('img')?.getAttribute('src')).toBe(
      '/blog-images/frontend-arch.png'
    );
    expect(fixture.nativeElement.querySelector('img')?.getAttribute('alt')).toBe('Test Project');
  });
});

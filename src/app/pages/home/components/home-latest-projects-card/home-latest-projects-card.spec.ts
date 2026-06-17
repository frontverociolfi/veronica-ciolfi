import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeLatestProjectsCardComponent } from './home-latest-projects-card';

describe('HomeLatestProjectsCardComponent', () => {
  let fixture: ComponentFixture<HomeLatestProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLatestProjectsCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLatestProjectsCardComponent);
    fixture.componentInstance.projects = [
      {
        slug: 'veronica-portfolio',
        name: 'Veronica Portfolio',
        summary: 'A structured portfolio.',
        technologies: ['Angular', 'TypeScript'],
        href: '/projects',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the project preview', () => {
    expect(fixture.nativeElement.textContent).toContain('Veronica Portfolio');
  });
});

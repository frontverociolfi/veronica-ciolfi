import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('paginates the mocked projects', () => {
    expect(component.totalPages()).toBe(2);
    expect(component.paginatedProjects().length).toBe(2);

    component.nextPage();

    expect(component.currentPage()).toBe(2);
    expect(component.paginatedProjects()[0]?.slug).toBe('onboarding-experience-suite');
  });

  it('updates project content when locale changes', () => {
    expect(component.projects()[0]?.name).toBe('Portfólio Veronica');

    component.i18n.setLocale('en-US');

    expect(component.projects()[0]?.name).toBe('Veronica Portfolio');
  });
});

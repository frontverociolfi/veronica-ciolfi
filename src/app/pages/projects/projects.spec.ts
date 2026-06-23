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

  it('keeps pagination stable with the mocked projects', () => {
    expect(component.hasProjects).toBe(true);
    expect(component.totalPages()).toBe(1);
    expect(component.paginatedProjects().length).toBe(2);
    expect(component.projects().length).toBe(2);
    expect(component.projects()[0].slug).toBe('frontend-architecture-explorer');

    component.nextPage();

    expect(component.currentPage()).toBe(1);
    expect(component.paginatedProjects().length).toBe(2);
  });

  it('recomputes the translated project content when locale changes', () => {
    expect(component.projects()[0].name).toBe('Frontend Architecture Explorer');

    component.i18n.setLocale('en-US');

    expect(component.projects()[0].name).toBe('Frontend Architecture Explorer');
    expect(component.projects()[0].summary).toContain('An interactive playground for');
  });
});

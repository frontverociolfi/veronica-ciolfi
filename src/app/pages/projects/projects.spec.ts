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

  it('keeps pagination stable when there are no mocked projects', () => {
    expect(component.totalPages()).toBe(1);
    expect(component.paginatedProjects().length).toBe(0);

    component.nextPage();

    expect(component.currentPage()).toBe(1);
    expect(component.paginatedProjects()[0]).toBeUndefined();
  });

  it('keeps projects empty when locale changes without base projects', () => {
    expect(component.projects()).toEqual([]);

    component.i18n.setLocale('en-US');

    expect(component.projects()).toEqual([]);
  });
});

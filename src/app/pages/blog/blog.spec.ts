import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BlogComponent } from './blog';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the blog heading', () => {
    expect(fixture.nativeElement.textContent).toContain('Escrevendo sobre o que construo.');
  });

  it('paginates the mocked posts', () => {
    expect(component.totalPages()).toBe(2);
    expect(component.paginatedPosts().length).toBe(4);

    component.nextPage();

    expect(component.currentPage()).toBe(2);
    expect(component.paginatedPosts()[0]?.slug).toBe('frontend-war');
  });

  it('updates post content when locale changes', () => {
    expect(component.posts()[0]?.title).toBe('O Problema Mais Caro do Frontend É a Confusão');

    component.i18n.setLocale('en-US');

    expect(component.posts()[0]?.title).toBe('The Most Expensive Frontend Problem Is Confusion');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuComponent } from './menu';

describe('MenuComponent', () => {
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll(
      'a.menu-link',
    ) as NodeListOf<HTMLAnchorElement>;

    expect(links.length).toBe(4);
    expect(Array.from(links).map((link) => link.getAttribute('aria-label'))).toEqual([
      'Inicio',
      'Projetos',
      'CV',
      'Contato',
    ]);
  });
});

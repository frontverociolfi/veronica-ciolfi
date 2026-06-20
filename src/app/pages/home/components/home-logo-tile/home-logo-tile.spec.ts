import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHeroLogoTileComponent } from './home-logo-tile';

describe('HomeHeroLogoTileComponent', () => {
  let fixture: ComponentFixture<HomeHeroLogoTileComponent>;
  let component: HomeHeroLogoTileComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeroLogoTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeroLogoTileComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('renders the logo tile with the translated aria label in pt-BR', () => {
    const tile = host.querySelector('.logo-tile');

    expect(tile).toBeTruthy();
    expect(tile?.getAttribute('aria-label')).toBe('Monograma Veronica Ciolfi');
  });

  it('renders the logo image as decorative content', () => {
    const image = host.querySelector('img');

    expect(image).toBeTruthy();
    expect(image?.getAttribute('src')).toBe('vc-logo.svg');
    expect(image?.getAttribute('alt')).toBe('');
    expect(image?.getAttribute('aria-hidden')).toBe('true');
  });

  it('updates the accessible label when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    expect(host.querySelector('.logo-tile')?.getAttribute('aria-label')).toBe(
      'Veronica Ciolfi monogram'
    );
  });
});

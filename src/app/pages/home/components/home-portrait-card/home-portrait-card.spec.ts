import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePortraitCardComponent } from './home-portrait-card';

describe('HomePortraitCardComponent', () => {
  let fixture: ComponentFixture<HomePortraitCardComponent>;
  let component: HomePortraitCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePortraitCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePortraitCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('renders the portrait card with the translated aria label in pt-BR', () => {
    const card = host.querySelector('.portrait-card');

    expect(card).toBeTruthy();
    expect(card?.getAttribute('aria-label')).toBe('Ilustracao de retrato criativo');
  });

  it('renders the portrait image as decorative content', () => {
    const image = host.querySelector('img');

    expect(image).toBeTruthy();
    expect(image?.getAttribute('src')).toBe('office-headshot.png');
    expect(image?.getAttribute('alt')).toBe('');
    expect(image?.getAttribute('aria-hidden')).toBe('true');
  });

  it('updates the accessible label when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    expect(host.querySelector('.portrait-card')?.getAttribute('aria-label')).toBe(
      'Creative portrait illustration'
    );
  });
});

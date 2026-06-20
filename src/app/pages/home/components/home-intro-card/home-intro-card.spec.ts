import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeIntroCardComponent } from './home-intro-card';

describe('HomeIntroCardComponent', () => {
  let fixture: ComponentFixture<HomeIntroCardComponent>;
  let component: HomeIntroCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIntroCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeIntroCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('renders the translated intro label and body in pt-BR', () => {
    const paragraphs = host.querySelectorAll('p');

    expect(host.querySelector('.intro-card')).toBeTruthy();
    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent).toContain('Sobre mim');
    expect(paragraphs[1].textContent).toContain('Sou desenvolvedora frontend em São Paulo');
  });

  it('renders the decorative dot inside the label', () => {
    const labelDot = host.querySelector('.label span[aria-hidden="true"]');

    expect(labelDot).toBeTruthy();
  });

  it('updates the label and body text when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const paragraphs = host.querySelectorAll('p');

    expect(paragraphs[0].textContent).toContain('About me');
    expect(paragraphs[1].textContent).toContain('Based in São Paulo, Brazil');
    expect(paragraphs[1].textContent).toContain('I write science fiction');
  });
});

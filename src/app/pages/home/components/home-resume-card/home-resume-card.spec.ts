import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeResumeCardComponent } from './home-resume-card';

describe('HomeResumeCardComponent', () => {
  let fixture: ComponentFixture<HomeResumeCardComponent>;
  let component: HomeResumeCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeResumeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeResumeCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('opens the Portuguese resume in a new tab by default', () => {
    const link = host.querySelector('a');

    expect(link?.getAttribute('href')).toBe('cv/cv-veronica-ciolfi-pt.pdf');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('opens the English resume when the locale is en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    expect(component.resumePdfUrl()).toBe('cv/cv-veronica-ciolfi-en.pdf');
    expect(host.querySelector('a')?.getAttribute('href')).toBe('cv/cv-veronica-ciolfi-en.pdf');
  });

  it('renders translated resume copy and CTA icon', () => {
    expect(host.textContent).toContain('Currículo completo em PDF');
    expect(host.textContent).toContain('Uma visão detalhada');
    expect(host.querySelector('ng-icon')).toBeTruthy();
  });
});

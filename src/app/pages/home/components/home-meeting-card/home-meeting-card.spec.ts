import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMeetingCardComponent } from './home-meeting-card';

describe('HomeMeetingCardComponent', () => {
  let fixture: ComponentFixture<HomeMeetingCardComponent>;
  let component: HomeMeetingCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMeetingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMeetingCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    component.meetingUrl =
      'https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+with+Veronica+Ciolfi&add=veronica%40example.com';
    fixture.detectChanges();
  });

  it('renders the translated meeting text and aria label in pt-BR', () => {
    const link = host.querySelector('.meeting-card');

    expect(link?.getAttribute('aria-label')).toBe('Agendar call no Google Meet');
    expect(host.textContent).toContain('Vamos fazer uma call rapidinho?');
  });

  it('uses the full card as an external link with prefilled event data', () => {
    const link = host.querySelector('a') as HTMLAnchorElement | null;

    expect(link?.getAttribute('href')).toContain('eventedit?text=Call+with+Veronica+Ciolfi');
    expect(link?.getAttribute('href')).toContain('add=veronica%40example.com');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders the CTA icon inside the circular action element', () => {
    const cta = host.querySelector('.cta');
    const icon = host.querySelector('ng-icon');

    expect(cta).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(cta?.contains(icon)).toBe(true);
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
  });

  it('updates the translated text and aria label when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const link = host.querySelector('.meeting-card');

    expect(link?.getAttribute('aria-label')).toBe('Schedule a Google Meet call');
    expect(host.textContent).toContain('How about a 30 min call with me?');
  });
});

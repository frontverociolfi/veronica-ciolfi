import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMeetingCardComponent } from './home-meeting-card';

describe('HomeMeetingCardComponent', () => {
  let fixture: ComponentFixture<HomeMeetingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMeetingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMeetingCardComponent);
    fixture.componentInstance.meetingUrl =
      'https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+with+Veronica+Ciolfi&add=veronica%40example.com';
    fixture.detectChanges();
  });

  it('renders the meeting cta', () => {
    expect(fixture.nativeElement.textContent).toContain('Agendar');
  });

  it('uses the full card as an external link with prefilled event data', () => {
    const link: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');

    expect(link?.getAttribute('href')).toContain('eventedit?text=Call+with+Veronica+Ciolfi');
    expect(link?.getAttribute('href')).toContain('add=veronica%40example.com');
    expect(link?.getAttribute('target')).toBe('_blank');
  });
});

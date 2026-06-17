import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMeetingCardComponent } from './home-meeting-card';

describe('HomeMeetingCardComponent', () => {
  let fixture: ComponentFixture<HomeMeetingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMeetingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMeetingCardComponent);
    fixture.componentInstance.meetingUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';
    fixture.detectChanges();
  });

  it('renders the meeting cta', () => {
    expect(fixture.nativeElement.textContent).toContain('Meet');
  });
});

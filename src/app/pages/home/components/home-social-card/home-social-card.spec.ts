import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSocialCardComponent } from './home-social-card';

describe('HomeSocialCardComponent', () => {
  let fixture: ComponentFixture<HomeSocialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSocialCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSocialCardComponent);
    fixture.componentInstance.linkedinUrl = 'https://www.linkedin.com/in/veronica-ciolfi/';
    fixture.detectChanges();
  });

  it('renders the social mark', () => {
    expect(fixture.nativeElement.textContent).toContain('in');
  });

  it('uses the full card as an external link', () => {
    const link: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');

    expect(link?.getAttribute('href')).toBe('https://www.linkedin.com/in/veronica-ciolfi/');
  });
});

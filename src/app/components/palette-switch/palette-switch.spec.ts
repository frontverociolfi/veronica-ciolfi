import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaletteSwitchComponent } from './palette-switch';

describe('PaletteSwitchComponent', () => {
  let fixture: ComponentFixture<PaletteSwitchComponent>;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [PaletteSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaletteSwitchComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render three palette choices', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.palette-button') as NodeListOf<HTMLButtonElement>;

    expect(buttons.length).toBe(3);
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
  });

  it('should switch to the next palette', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.palette-button') as NodeListOf<HTMLButtonElement>;

    buttons[2].click();
    fixture.detectChanges();

    expect(buttons[2].getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.getAttribute('data-palette')).toBe('regal');
  });
});

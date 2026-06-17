import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageToggleComponent } from './language-toggle';

describe('LanguageToggleComponent', () => {
  let fixture: ComponentFixture<LanguageToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageToggleComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render language buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll(
      '.language-button',
    ) as NodeListOf<HTMLButtonElement>;

    expect(buttons.length).toBe(2);
    expect(buttons[0].getAttribute('aria-label')).toBe('Portugues');
    expect(buttons[1].getAttribute('aria-label')).toBe('Ingles');
  });

  it('should switch language when clicking the english button', () => {
    const buttons = fixture.nativeElement.querySelectorAll(
      '.language-button',
    ) as NodeListOf<HTMLButtonElement>;

    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');

    buttons[1].click();
    fixture.detectChanges();

    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
  });
});

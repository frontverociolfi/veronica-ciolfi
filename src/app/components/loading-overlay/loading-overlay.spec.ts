import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingOverlayComponent } from './loading-overlay';

describe('LoadingOverlayComponent', () => {
  let fixture: ComponentFixture<LoadingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingOverlayComponent);
    fixture.componentRef.setInput('active', true);
    fixture.componentRef.setInput('label', 'Loading page');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply the active state', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const overlay = compiled.querySelector('.loading-overlay');

    expect(overlay?.classList.contains('is-active')).toBe(true);
    expect(overlay?.getAttribute('aria-hidden')).toBe('false');
  });
});

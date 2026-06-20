import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ShellComponent } from './shell';

describe('ShellComponent', () => {
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the shared menu', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('vc-menu')).toBeTruthy();
  });

  it('should render the shared language toggle', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('vc-language-toggle')).toBeTruthy();
  });

  it('should render the shared theme toggle', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('vc-theme-toggle')).toBeTruthy();
  });

  it('should render the footer copy', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(`Veronica Ciolfi @ ${new Date().getFullYear()}`);
  });
});

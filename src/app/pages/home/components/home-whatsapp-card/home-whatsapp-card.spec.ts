import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWhatsappCardComponent } from './home-whatsapp-card';

describe('HomeWhatsappCardComponent', () => {
  let fixture: ComponentFixture<HomeWhatsappCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhatsappCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeWhatsappCardComponent);
    fixture.componentInstance.whatsappUrl = 'https://wa.me/5514991947676';
    fixture.detectChanges();
  });

  it('renders the whatsapp icon', () => {
    const icon = fixture.nativeElement.querySelector('ng-icon[name="remixWhatsappFill"]');

    expect(icon).not.toBeNull();
  });

  it('renders the responsive button text', () => {
    expect(fixture.nativeElement.textContent).toContain('Conversar no WhatsApp');
  });

  it('uses the full card as an external link', () => {
    const link: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');

    expect(link?.getAttribute('href')).toContain('wa.me/5514991947676');
    expect(link?.getAttribute('target')).toBe('_blank');
  });
});

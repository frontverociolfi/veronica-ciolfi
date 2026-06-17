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

  it('renders the whatsapp mark', () => {
    expect(fixture.nativeElement.textContent).toContain('wa');
  });

  it('uses the full card as an external link', () => {
    const link: HTMLAnchorElement | null = fixture.nativeElement.querySelector('a');

    expect(link?.getAttribute('href')).toContain('wa.me/5514991947676');
  });
});

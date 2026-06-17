import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeIntroCardComponent } from './home-intro-card';

describe('HomeIntroCardComponent', () => {
  let fixture: ComponentFixture<HomeIntroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIntroCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeIntroCardComponent);
    fixture.detectChanges();
  });

  it('renders the intro label', () => {
    expect(fixture.nativeElement.textContent).toContain('Sobre mim');
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHeroLogoTileComponent } from './home-logo-tile';

describe('HomeHeroLogoTileComponent', () => {
  let fixture: ComponentFixture<HomeHeroLogoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeroLogoTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeroLogoTileComponent);
    fixture.detectChanges();
  });

  it('creates the logo tile', () => {
    expect(fixture.nativeElement.querySelector('.logo-tile')).toBeTruthy();
  });
});


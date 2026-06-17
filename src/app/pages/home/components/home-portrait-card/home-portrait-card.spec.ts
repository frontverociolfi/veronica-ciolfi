import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePortraitCardComponent } from './home-portrait-card';

describe('HomePortraitCardComponent', () => {
  let fixture: ComponentFixture<HomePortraitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePortraitCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePortraitCardComponent);
    fixture.detectChanges();
  });

  it('renders the portrait image', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
  });
});


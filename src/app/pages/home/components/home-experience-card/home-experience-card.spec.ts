import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeExperienceCardComponent } from './home-experience-card';

describe('HomeExperienceCardComponent', () => {
  let fixture: ComponentFixture<HomeExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExperienceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExperienceCardComponent);
    fixture.componentInstance.experience = [
      { roleKey: 'home.experience.role1', companyKey: 'home.experience.company1', periodKey: 'home.experience.period1' },
    ];
    fixture.detectChanges();
  });

  it('renders the experience title', () => {
    expect(fixture.nativeElement.textContent).toContain('Dez anos criando e entregando software.');
  });
});


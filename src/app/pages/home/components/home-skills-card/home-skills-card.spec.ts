import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSkillsCardComponent } from './home-skills-card';

describe('HomeSkillsCardComponent', () => {
  let fixture: ComponentFixture<HomeSkillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSkillsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSkillsCardComponent);
    fixture.componentInstance.skills = [
      { name: 'Angular', level: 95, icon: 'heroCodeBracket', color: 'var(--color-vibrant-coral)' },
    ];
    fixture.detectChanges();
  });

  it('renders the skill row', () => {
    expect(fixture.nativeElement.textContent).toContain('Angular');
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSkillsCardComponent } from './home-skills-card';

describe('HomeSkillsCardComponent', () => {
  let fixture: ComponentFixture<HomeSkillsCardComponent>;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  const scheduledFrames = new Map<number, ReturnType<typeof setTimeout>>();
  let nextFrameId = 1;

  beforeEach(async () => {
    window.requestAnimationFrame = ((callback: FrameRequestCallback) => {
      const frameId = nextFrameId++;
      const timerId = setTimeout(() => {
        scheduledFrames.delete(frameId);
        callback(performance.now() + 5000);
      }, 0);

      scheduledFrames.set(frameId, timerId);

      return frameId;
    }) as typeof window.requestAnimationFrame;
    window.cancelAnimationFrame = ((frameId: number) => {
      const timerId = scheduledFrames.get(frameId);

      if (timerId) {
        clearTimeout(timerId);
        scheduledFrames.delete(frameId);
      }
    }) as typeof window.cancelAnimationFrame;

    await TestBed.configureTestingModule({
      imports: [HomeSkillsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSkillsCardComponent);
    fixture.componentInstance.skillsLeft = [
      { name: 'Angular', level: 95, icon: 'heroCodeBracket', color: 'var(--color-accent-400)' },
    ];
    fixture.componentInstance.skillsRight = [];
    fixture.detectChanges();
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRequestAnimationFrame;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
  });

  it('renders the skill row', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Angular');
  });

  it('animates the displayed percentage until the final value', async () => {
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 0));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('95%');
  });
});



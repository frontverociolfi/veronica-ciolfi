import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSkillsCardComponent } from './home-skills-card';

describe('HomeSkillsCardComponent', () => {
  let fixture: ComponentFixture<HomeSkillsCardComponent>;
  let host: HTMLElement;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  const originalMatchMedia = window.matchMedia;
  const scheduledFrames = new Map<number, FrameRequestCallback>();
  let nextFrameId = 1;
  let reducedMotion = false;

  const flushAnimationFrame = (now = performance.now() + 5000) => {
    const frame = Array.from(scheduledFrames.entries())[0];

    if (!frame) {
      return;
    }

    const [frameId, callback] = frame;
    scheduledFrames.delete(frameId);
    callback(now);
  };

  const flushAllAnimationFrames = (now = performance.now() + 10000, maxFrames = 20) => {
    for (let index = 0; index < maxFrames && scheduledFrames.size > 0; index += 1) {
      flushAnimationFrame(now);
    }
  };

  const waitForAnimation = async () => {
    await fixture.whenStable();
    flushAllAnimationFrames();
    fixture.detectChanges();
  };

  beforeEach(async () => {
    window.requestAnimationFrame = ((callback: FrameRequestCallback) => {
      const frameId = nextFrameId++;
      scheduledFrames.set(frameId, callback);

      return frameId;
    }) as typeof window.requestAnimationFrame;
    window.cancelAnimationFrame = ((frameId: number) => {
      if (scheduledFrames.has(frameId)) {
        scheduledFrames.delete(frameId);
      }
    }) as typeof window.cancelAnimationFrame;
    window.matchMedia = ((query: string) => ({
      matches: reducedMotion && query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    })) as typeof window.matchMedia;

    await TestBed.configureTestingModule({
      imports: [HomeSkillsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSkillsCardComponent);
    host = fixture.nativeElement as HTMLElement;
    fixture.componentInstance.skills = [
      { name: 'Angular', level: 95, icon: 'heroCodeBracket', color: 'var(--color-accent-400)' },
      { name: 'TypeScript', level: 90, icon: 'heroCommandLine', color: 'var(--color-accent-400)' },
      { name: 'React', level: 82, icon: 'remixReactjsFill', color: 'var(--color-accent-400)' },
    ];
    fixture.detectChanges();
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRequestAnimationFrame;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
    window.matchMedia = originalMatchMedia;
    scheduledFrames.clear();
    nextFrameId = 1;
    reducedMotion = false;
  });

  it('renders the skill row', async () => {
    await waitForAnimation();

    expect(host.textContent).toContain('Angular');
    expect(host.textContent).toContain('TypeScript');
    expect(host.textContent).toContain('React');
  });

  it('animates the displayed percentage until the final value', async () => {
    await fixture.whenStable();
    flushAnimationFrame(performance.now() + 3000);
    fixture.detectChanges();

    const firstValue = host.querySelector('.skill-value')?.textContent?.trim() ?? '';
    const intermediateLevel = Number.parseInt(firstValue, 10);

    expect(intermediateLevel).toBeGreaterThan(0);
    expect(intermediateLevel).toBeLessThan(95);
    expect(host.textContent).not.toContain('95%');

    flushAllAnimationFrames();
    fixture.detectChanges();

    expect(host.textContent).toContain('95%');
    expect(host.textContent).toContain('90%');
    expect(host.textContent).toContain('82%');
  });

  it('renders two skill columns with the expected amount of rows', async () => {
    await waitForAnimation();

    const columns = host.querySelectorAll('.skills-list');
    const rows = host.querySelectorAll('.skill-row');

    expect(columns.length).toBe(2);
    expect(rows.length).toBe(3);
    expect(columns[0].querySelectorAll('.skill-row').length).toBe(2);
    expect(columns[1].querySelectorAll('.skill-row').length).toBe(1);
  });

  it('configures progressbars with accessible labels and final values', async () => {
    await waitForAnimation();

    const progressbars = Array.from(
      host.querySelectorAll('.skill-track[role="progressbar"]')
    ) as HTMLElement[];

    expect(progressbars.length).toBe(3);
    expect(progressbars[0].getAttribute('aria-label')).toBe('Angular');
    expect(progressbars[0].getAttribute('aria-valuenow')).toBe('95');
    expect(progressbars[0].getAttribute('aria-valuemin')).toBe('0');
    expect(progressbars[0].getAttribute('aria-valuemax')).toBe('100');
    expect(progressbars[2].getAttribute('aria-label')).toBe('React');
    expect(progressbars[2].getAttribute('aria-valuenow')).toBe('82');
  });

  it('renders one icon for each skill', async () => {
    await waitForAnimation();

    const icons = host.querySelectorAll('ng-icon');

    expect(icons.length).toBe(3);
  });

  it('applies the animated width to each skill fill', async () => {
    await waitForAnimation();

    const fills = Array.from(host.querySelectorAll('.skill-fill')) as HTMLElement[];

    expect(fills[0].style.width).toBe('95%');
    expect(fills[1].style.width).toBe('90%');
    expect(fills[2].style.width).toBe('82%');
  });

  it('skips animation when reduced motion is enabled', async () => {
    reducedMotion = true;
    scheduledFrames.clear();

    fixture = TestBed.createComponent(HomeSkillsCardComponent);
    host = fixture.nativeElement as HTMLElement;
    fixture.componentInstance.skills = [
      { name: 'Angular', level: 95, icon: 'heroCodeBracket', color: 'var(--color-accent-400)' },
    ];
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(host.textContent).toContain('95%');
    expect((host.querySelector('.skill-fill') as HTMLElement | null)?.style.width).toBe('95%');
    expect(scheduledFrames.size).toBe(0);
  });

  it('restarts the animation when the skills input changes after initial render', async () => {
    await waitForAnimation();

    fixture.componentRef.setInput('skills', [
      { name: 'Vue', level: 64, icon: 'heroCodeBracket', color: 'var(--color-accent-400)' },
      { name: 'Svelte', level: 58, icon: 'heroCommandLine', color: 'var(--color-accent-400)' },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(host.textContent).toContain('0%');

    flushAllAnimationFrames();
    fixture.detectChanges();

    expect(host.textContent).toContain('Vue');
    expect(host.textContent).toContain('64%');
    expect(host.textContent).toContain('58%');
  });
});



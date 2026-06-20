import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeExperienceCardComponent } from './home-experience-card';

describe('HomeExperienceCardComponent', () => {
  let fixture: ComponentFixture<HomeExperienceCardComponent>;
  let component: HomeExperienceCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExperienceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExperienceCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    component.experience = [
      {
        roleKey: 'home.experience.role1',
        companyKey: 'home.experience.company1',
        periodKey: 'home.experience.period1',
      },
      {
        roleKey: 'home.experience.role2',
        companyKey: 'home.experience.company2',
        periodKey: 'home.experience.period2',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the translated label, title, and aria label in pt-BR', () => {
    const card = host.querySelector('.experience-card');

    expect(card?.getAttribute('aria-label')).toBe('Resumo de experiencia profissional');
    expect(host.textContent).toContain('Experiência');
    expect(host.textContent).toContain('Dez anos criando e entregando software.');
  });

  it('renders one row per experience item with translated content', () => {
    const rows = host.querySelectorAll('.experience-row');

    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Engenheira de software sênior');
    expect(rows[0].textContent).toContain('Arquitetura frontend, qualidade e escalabilidade');
    expect(rows[0].textContent).toContain('2025 - Agora');
    expect(rows[1].textContent).toContain('Desenvolvedora frontend sênior');
    expect(rows[1].textContent).toContain('Angular, React, acessibilidade e design systems');
    expect(rows[1].textContent).toContain('2023 - 2025');
  });

  it('updates the translated content when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const card = host.querySelector('.experience-card');
    const rows = host.querySelectorAll('.experience-row');

    expect(card?.getAttribute('aria-label')).toBe('Professional experience summary');
    expect(host.textContent).toContain('Experience');
    expect(host.textContent).toContain('Ten years building products that people use.');
    expect(rows[0].textContent).toContain('Senior Software Engineer');
    expect(rows[0].textContent).toContain('Scalable systems, technical leadership and product development');
    expect(rows[0].textContent).toContain('2025 - Now');
  });

  it('renders no rows when the experience input is empty', () => {
    fixture.componentRef.setInput('experience', []);
    fixture.detectChanges();

    expect(host.querySelectorAll('.experience-row').length).toBe(0);
    expect(host.querySelector('.experience-list')).toBeTruthy();
  });
});

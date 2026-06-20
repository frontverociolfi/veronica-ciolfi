import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeLatestProjectsCardComponent } from './home-latest-projects-card';

describe('HomeLatestProjectsCardComponent', () => {
  let fixture: ComponentFixture<HomeLatestProjectsCardComponent>;
  let component: HomeLatestProjectsCardComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLatestProjectsCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLatestProjectsCardComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    component.projects = [
      {
        slug: 'veronica-portfolio',
        name: 'Veronica Portfolio',
        summary: 'A structured portfolio.',
        technologies: ['Angular', 'TypeScript', 'CSS'],
        href: '/projects',
      },
      {
        slug: 'document-flow-platform',
        name: 'Document Flow Platform',
        summary: 'A document management interface for enterprise teams.',
        technologies: ['Angular', 'RxJS', 'Azure'],
        href: '/projects',
      },
    ];
    fixture.detectChanges();
  });

  it('renders the translated aria label, label, title, and CTA in pt-BR', () => {
    const card = host.querySelector('.latest-card');

    expect(card?.getAttribute('aria-label')).toBe('Previa dos ultimos projetos');
    expect(host.textContent).toContain('Projetos');
    expect(host.textContent).toContain('Ultimos projetos.');
    expect(host.textContent).toContain('Ver todos');
  });

  it('renders one preview card per project with summary and technologies', () => {
    const itemCards = host.querySelectorAll('.item-card');
    const pillGroups = host.querySelectorAll('.item-pills');

    expect(itemCards.length).toBe(2);
    expect(itemCards[0].textContent).toContain('Veronica Portfolio');
    expect(itemCards[0].textContent).toContain('A structured portfolio.');
    expect(itemCards[0].textContent).toContain('Angular');
    expect(itemCards[0].textContent).toContain('TypeScript');
    expect(itemCards[0].textContent).toContain('CSS');
    expect(itemCards[1].textContent).toContain('Document Flow Platform');
    expect(itemCards[1].textContent).toContain('RxJS');
    expect(pillGroups[0].querySelectorAll('span').length).toBe(3);
    expect(pillGroups[1].querySelectorAll('span').length).toBe(3);
  });

  it('uses router links for both the projects CTA and each preview card', () => {
    const links = Array.from(host.querySelectorAll('a')) as HTMLAnchorElement[];

    expect(links.length).toBe(3);
    expect(links[0].getAttribute('href')).toBe('/projects');
    expect(links[1].getAttribute('href')).toBe('/projects');
    expect(links[2].getAttribute('href')).toBe('/projects');
  });

  it('updates the translated static copy when locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const card = host.querySelector('.latest-card');

    expect(card?.getAttribute('aria-label')).toBe('Latest projects preview');
    expect(host.textContent).toContain('Latest projects.');
    expect(host.textContent).toContain('View all');
  });

  it('renders no preview cards when the projects input is empty', () => {
    fixture.componentRef.setInput('projects', []);
    fixture.detectChanges();

    expect(host.querySelectorAll('.item-card').length).toBe(0);
    expect(host.querySelector('.item-list')).toBeTruthy();
  });
});

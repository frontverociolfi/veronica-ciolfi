import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Home } from './home';
import { HomeLatestPostsCardComponent } from './components/home-latest-posts-card/home-latest-posts-card';
import { HomeLatestProjectsCardComponent } from './components/home-latest-projects-card/home-latest-projects-card';
import { HomeMeetingCardComponent } from './components/home-meeting-card/home-meeting-card';
import { HomeResumeCardComponent } from './components/home-resume-card/home-resume-card';
import { HomeExperienceCardComponent } from './components/home-experience-card/home-experience-card';
import { HomeSocialCardComponent } from './components/home-social-card/home-social-card';
import { HomeSkillsCardComponent } from './components/home-skills-card/home-skills-card';
import { HomeStackCardComponent } from './components/home-stack-card/home-stack-card';
import { HomeWhatsappCardComponent } from './components/home-whatsapp-card/home-whatsapp-card';

describe('Home page', () => {
  let fixture: ComponentFixture<Home>;
  let component: Home;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('renders the hero heading and the main home sections', () => {
    const heroTitle = host.querySelector('#intro-title');
    const firstRow = host.querySelector('.grid-row-primary');
    const secondRow = host.querySelector('.grid-row-secondary');
    const finalRow = host.querySelector('.grid-row-final');

    expect(heroTitle?.getAttribute('aria-label')).toBe('Veronica Ciolfi.');
    expect(heroTitle?.textContent?.replace(/\s+/g, '')).toContain('VeronicaCiolfi.');
    expect(firstRow?.querySelector('vc-home-logo-tile')).toBeTruthy();
    expect(secondRow?.querySelector('vc-home-skills-card')).toBeTruthy();
    expect(finalRow?.querySelector('vc-home-experience-card')).toBeTruthy();
  });

  it('renders the animated hero title as two lines with staggered letters', () => {
    const titleLines = host.querySelectorAll('#intro-title .title-line');
    const titleLetters = host.querySelectorAll('#intro-title .title-letter');

    expect(titleLines.length).toBe(2);
    expect(titleLetters.length).toBe(15);
    expect(titleLines[0].textContent).toBe('Veronica');
    expect(titleLines[1].textContent).toBe('Ciolfi.');
    expect((titleLetters[0] as HTMLElement).style.getPropertyValue('--letter-delay')).toBe('220ms');
    expect((titleLetters[14] as HTMLElement).style.getPropertyValue('--letter-delay')).toBe('3600ms');
  });

  it('builds a Google Calendar meeting URL with the default locale title and guest email', () => {
    const meetingUrl = component.meetingUrl();

    expect(meetingUrl).toContain('https://calendar.google.com/calendar/u/0/r/eventedit?');
    expect(meetingUrl).toContain('text=Call+com+Veronica+Ciolfi');
    expect(meetingUrl).toContain(`add=${encodeURIComponent(component.meetingGuestEmail)}`);
  });

  it('trims the calendar title and guest email before building the meeting URL', () => {
    const meetingUrl = (component as any).buildGoogleCalendarEventUrl({
      title: '  Custom Call  ',
      guestEmail: '  verociolfi@gmail.com  ',
    });

    expect(meetingUrl).toContain('text=Custom+Call');
    expect(meetingUrl).toContain('add=verociolfi%40gmail.com');
  });

  it('limits latest posts and previews the first project from the mock data', () => {
    const latestProjects = component.latestProjects();
    const latestPosts = component.latestPosts();

    expect(latestProjects.length).toBe(1);
    expect(latestProjects[0].name).toBe('Oracle Cat');
    expect(latestPosts.length).toBe(2);
    expect(latestPosts[0].title).toBe('O Problema Mais Caro do Frontend É a Confusão');
    expect(latestPosts[0].cover).toBe('blog-images/frontend-confusion.png');
    expect(latestPosts[0].href).toBe('/blog/the-most-expensive-frontend-problem-is-confusion');
  });

  it('exposes the expected static datasets for experience, skills, and stack', () => {
    expect(component.experience.length).toBe(3);
    expect(component.experience[0]).toEqual({
      roleKey: 'home.experience.role1',
      companyKey: 'home.experience.company1',
      periodKey: 'home.experience.period1',
    });

    expect(component.skills.length).toBe(8);
    expect(component.skills[0].name).toBe('Angular');
    expect(component.skills[0].level).toBe(95);
    expect(component.skills[7].name).toBe('Azure - CI/CD');

    expect(component.stack.length).toBeGreaterThan(20);
    expect(component.stack).toContain('Storybook');
    expect(component.stack).toContain('Angular');
  });

  it('recomputes localized content and the meeting URL when the locale changes to en-US', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();
    const latestPosts = component.latestPosts();
    expect(latestPosts[0].title).toBe('The Most Expensive Frontend Problem Is Confusion');
    expect(component.meetingUrl()).toContain('text=Call+with+Veronica+Ciolfi');
  });

  it('updates translated hero copy in the DOM when the locale changes', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const eyebrow = host.querySelector('.eyebrow');

    expect(eyebrow?.textContent).toContain('Software engineer');
    expect(eyebrow?.textContent).toContain('sci-fi writer');
  });

  it('passes the derived data and urls down to the child cards', () => {
    const projectsCard = fixture.debugElement.query(By.directive(HomeLatestProjectsCardComponent));
    const postsCard = fixture.debugElement.query(By.directive(HomeLatestPostsCardComponent))
      .componentInstance as HomeLatestPostsCardComponent;
    const meetingCard = fixture.debugElement.query(By.directive(HomeMeetingCardComponent))
      .componentInstance as HomeMeetingCardComponent;
    const resumeCard = fixture.debugElement.query(By.directive(HomeResumeCardComponent))
      .componentInstance as HomeResumeCardComponent;
    const experienceCard = fixture.debugElement.query(By.directive(HomeExperienceCardComponent))
      .componentInstance as HomeExperienceCardComponent;
    const skillsCard = fixture.debugElement.query(By.directive(HomeSkillsCardComponent))
      .componentInstance as HomeSkillsCardComponent;
    const socialCard = fixture.debugElement.query(By.directive(HomeSocialCardComponent))
      .componentInstance as HomeSocialCardComponent;
    const stackCard = fixture.debugElement.query(By.directive(HomeStackCardComponent))
      .componentInstance as HomeStackCardComponent;
    const whatsappCard = fixture.debugElement.query(By.directive(HomeWhatsappCardComponent))
      .componentInstance as HomeWhatsappCardComponent;

    expect(projectsCard).not.toBeNull();
    expect((projectsCard.componentInstance as HomeLatestProjectsCardComponent).projects.length).toBe(1);
    expect(postsCard.posts.length).toBe(2);
    expect(experienceCard.experience).toBe(component.experience);
    expect(skillsCard.skills).toBe(component.skills);
    expect(meetingCard.meetingUrl).toBe(component.meetingUrl());
    expect(resumeCard.resumePdfUrl()).toBe('/cv/cv-veronica-ciolfi-pt.pdf');
    expect(socialCard.linkedinUrl).toBe(component.linkedinUrl);
    expect(stackCard.stack).toBe(component.stack);
    expect(whatsappCard.whatsappUrl).toBe(component.whatsappUrl);
  });

  it('propagates localized latest content to child cards after locale changes', () => {
    component.i18n.setLocale('en-US');
    fixture.detectChanges();

    const postsCard = fixture.debugElement.query(By.directive(HomeLatestPostsCardComponent))
      .componentInstance as HomeLatestPostsCardComponent;
    expect(postsCard.posts[0].title).toBe('The Most Expensive Frontend Problem Is Confusion');
  });
});

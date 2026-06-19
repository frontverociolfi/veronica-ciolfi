import { Component, computed } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';
import {
  HomeExperienceCardComponent,
} from './components/home-experience-card/home-experience-card';
import { HomeHeroLogoTileComponent } from './components/home-logo-tile/home-logo-tile';
import { HomeIntroCardComponent } from './components/home-intro-card/home-intro-card';
import {
  HomeLatestPostsCardComponent,
  HomeLatestPostItem,
} from './components/home-latest-posts-card/home-latest-posts-card';
import {
  HomeLatestProjectsCardComponent,
  HomeLatestProjectItem,
} from './components/home-latest-projects-card/home-latest-projects-card';
import { HomeMeetingCardComponent } from './components/home-meeting-card/home-meeting-card';
import { HomePortraitCardComponent } from './components/home-portrait-card/home-portrait-card';
import { HomeResumeCardComponent } from './components/home-resume-card/home-resume-card';
import { HomeSkillsCardComponent } from './components/home-skills-card/home-skills-card';
import { HomeSocialCardComponent } from './components/home-social-card/home-social-card';
import { HomeStackCardComponent } from './components/home-stack-card/home-stack-card';
import { HomeWhatsappCardComponent } from './components/home-whatsapp-card/home-whatsapp-card';
import {
  BlogPostTranslation,
} from '../blog/models/blog-post';
import {
  ProjectCardTranslation,
} from '../projects/models/project-card';
import {
  HOME_BLOG_HREF,
  HOME_BLOG_POSTS_BASE,
  HOME_BLOG_TRANSLATIONS_BY_LOCALE,
  HOME_EXPERIENCE,
  HOME_LATEST_ITEMS_COUNT,
  HOME_LINKEDIN_URL,
  HOME_MEETING_GUEST_EMAIL,
  HOME_PROJECTS_BASE,
  HOME_PROJECTS_HREF,
  HOME_PROJECT_TRANSLATIONS_BY_LOCALE,
  HOME_RESUME_PDF_URL,
  HOME_SKILLS,
  HOME_STACK,
  HOME_TECHNOLOGIES_PREVIEW_COUNT,
  HOME_WHATSAPP_URL,
} from './home.constants';

@Component({
  selector: 'vc-home',
  imports: [
    HomeHeroLogoTileComponent,
    HomeIntroCardComponent,
    HomeLatestProjectsCardComponent,
    HomeLatestPostsCardComponent,
    HomeMeetingCardComponent,
    HomePortraitCardComponent,
    HomeResumeCardComponent,
    HomeSkillsCardComponent,
    HomeExperienceCardComponent,
    HomeSocialCardComponent,
    HomeStackCardComponent,
    HomeWhatsappCardComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly resumePdfUrl = HOME_RESUME_PDF_URL;
  readonly linkedinUrl = HOME_LINKEDIN_URL;
  readonly whatsappUrl = HOME_WHATSAPP_URL;
  readonly meetingGuestEmail = HOME_MEETING_GUEST_EMAIL;
  readonly meetingUrl = computed(() =>
    this.buildGoogleCalendarEventUrl({
      title: this.i18n.t('home.meetingEventTitle'),
      guestEmail: this.meetingGuestEmail,
    })
  );

  readonly experience = HOME_EXPERIENCE;
  readonly skills = HOME_SKILLS;
  readonly stack = HOME_STACK;

  readonly latestProjects = computed(() => {
    const translations = HOME_PROJECT_TRANSLATIONS_BY_LOCALE[this.i18n.locale()];

    return HOME_PROJECTS_BASE.slice(0, HOME_LATEST_ITEMS_COUNT).map((project) => {
      const localized = translations[project.slug] as ProjectCardTranslation;

      return {
        slug: project.slug,
        name: localized.name,
        summary: localized.summary,
        technologies: project.technologies.slice(0, HOME_TECHNOLOGIES_PREVIEW_COUNT),
        href: HOME_PROJECTS_HREF,
      } satisfies HomeLatestProjectItem;
    });
  });

  readonly latestPosts = computed(() => {
    const translations = HOME_BLOG_TRANSLATIONS_BY_LOCALE[this.i18n.locale()];

    return HOME_BLOG_POSTS_BASE.slice(0, HOME_LATEST_ITEMS_COUNT).map((post) => {
      const localized = translations[post.slug] as BlogPostTranslation;

      return {
        slug: post.slug,
        title: localized.title,
        excerpt: localized.excerpt,
        category: localized.category,
        publishedAt: post.publishedAt,
        href: HOME_BLOG_HREF,
      } satisfies HomeLatestPostItem;
    });
  });

  constructor(readonly i18n: I18nService) {}

  private buildGoogleCalendarEventUrl(options: { title: string; guestEmail: string }): string {
    const query = new URLSearchParams();

    if (options.title.trim()) {
      query.set('text', options.title.trim());
    }

    if (options.guestEmail.trim()) {
      query.set('add', options.guestEmail.trim());
    }

    const queryString = query.toString();

    return queryString
      ? `https://calendar.google.com/calendar/u/0/r/eventedit?${queryString}`
      : 'https://calendar.google.com/calendar/u/0/r/eventedit';
  }
}

import { Component, computed } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';
import { HomeExperienceCardComponent, HomeExperienceItem } from './components/home-experience-card/home-experience-card';
import { HomeHeroLogoTileComponent } from './components/home-logo-tile/home-logo-tile';
import { HomeIntroCardComponent } from './components/home-intro-card/home-intro-card';
import { HomeLatestPostsCardComponent, HomeLatestPostItem } from './components/home-latest-posts-card/home-latest-posts-card';
import { HomeLatestProjectsCardComponent, HomeLatestProjectItem } from './components/home-latest-projects-card/home-latest-projects-card';
import { HomeMeetingCardComponent } from './components/home-meeting-card/home-meeting-card';
import { HomePortraitCardComponent } from './components/home-portrait-card/home-portrait-card';
import { HomeResumeCardComponent } from './components/home-resume-card/home-resume-card';
import { HomeSkillsCardComponent, HomeSkillItem } from './components/home-skills-card/home-skills-card';
import { HomeSocialCardComponent } from './components/home-social-card/home-social-card';
import { HomeStackCardComponent } from './components/home-stack-card/home-stack-card';
import { HomeWhatsappCardComponent } from './components/home-whatsapp-card/home-whatsapp-card';
import blogPostsBase from '../blog/mocks/blog-posts.base.json';
import blogPostsEnUs from '../blog/mocks/blog-posts.en-US.json';
import blogPostsPtBr from '../blog/mocks/blog-posts.pt-BR.json';
import { BlogPostBase, BlogPostTranslation, BlogPostTranslationsMap } from '../blog/models/blog-post';
import projectsBase from '../projects/mocks/projects.base.json';
import projectsEnUs from '../projects/mocks/projects.en-US.json';
import projectsPtBr from '../projects/mocks/projects.pt-BR.json';
import { ProjectCardBase, ProjectCardTranslation, ProjectCardTranslationsMap } from '../projects/models/project-card';

const blogTranslationsByLocale: Record<'pt-BR' | 'en-US', BlogPostTranslationsMap> = {
  'pt-BR': blogPostsPtBr as BlogPostTranslationsMap,
  'en-US': blogPostsEnUs as BlogPostTranslationsMap,
};

const projectTranslationsByLocale: Record<'pt-BR' | 'en-US', ProjectCardTranslationsMap> = {
  'pt-BR': projectsPtBr as ProjectCardTranslationsMap,
  'en-US': projectsEnUs as ProjectCardTranslationsMap,
};

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
  styleUrl: './home.css'
})
export class Home {
  readonly resumePdfUrl = '/cv-veronica-ciolfi.pdf';
  readonly linkedinUrl = 'https://www.linkedin.com/in/veronica-ciolfi/';
  readonly whatsappUrl =
    'https://wa.me/5514991947676?text=Ol%C3%A1,%20vi%20seu%20perfil%20pessoal%20e%20fiquei%20interassado(a)%20nas%20suas%20qualifica%C3%A7%C3%B5es%20profissionais!%20Vamos%20conversar?';
  readonly meetingUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';

  readonly experience: ReadonlyArray<HomeExperienceItem> = [
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
    {
      roleKey: 'home.experience.role3',
      companyKey: 'home.experience.company3',
      periodKey: 'home.experience.period3',
    },
  ];

  readonly skills: ReadonlyArray<HomeSkillItem> = [
    {
      name: 'Angular',
      level: 95,
      icon: 'heroCodeBracket',
      color: 'var(--color-accent-400)',
    },
    {
      name: 'TypeScript',
      level: 90,
      icon: 'heroCommandLine',
      color: 'var(--color-accent-700)',
    },
    {
      name: 'Node.js',
      level: 82,
      icon: 'heroCpuChip',
      color: 'var(--color-base-100)',
    },
    {
      name: 'Creative UI',
      level: 88,
      icon: 'heroRocketLaunch',
      color: 'var(--color-accent-700)',
    },
  ];

  readonly stack = ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'SSR', 'Vitest', 'CSS'];

  readonly latestProjects = computed(() => {
    const translations = projectTranslationsByLocale[this.i18n.locale()];

    return (projectsBase as ReadonlyArray<ProjectCardBase>).slice(0, 2).map((project) => {
      const localized = translations[project.slug] as ProjectCardTranslation;

      return {
        slug: project.slug,
        name: localized.name,
        summary: localized.summary,
        technologies: project.technologies.slice(0, 3),
        href: '/projects',
      } satisfies HomeLatestProjectItem;
    });
  });

  readonly latestPosts = computed(() => {
    const translations = blogTranslationsByLocale[this.i18n.locale()];

    return (blogPostsBase as ReadonlyArray<BlogPostBase>).slice(0, 2).map((post) => {
      const localized = translations[post.slug] as BlogPostTranslation;

      return {
        slug: post.slug,
        title: localized.title,
        excerpt: localized.excerpt,
        category: localized.category,
        publishedAt: post.publishedAt,
        href: '/blog',
      } satisfies HomeLatestPostItem;
    });
  });

  constructor(readonly i18n: I18nService) {}
}


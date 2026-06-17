import { Injectable, signal } from '@angular/core';

export type Locale = 'pt-BR' | 'en-US';

export type TranslationKey =
  | 'language.en'
  | 'language.pt'
  | 'menu.home'
  | 'menu.projects'
  | 'menu.cv'
  | 'menu.contact'
  | 'shell.navigation'
  | 'shell.languageToggle'
  | 'shell.themeToggle'
  | 'theme.dark'
  | 'theme.light'
  | 'home.eyebrow'
  | 'home.overviewAria'
  | 'home.logoAria'
  | 'home.aboutLabel'
  | 'home.aboutText'
  | 'home.portraitAria'
  | 'home.skillsAria'
  | 'home.skillsTitle'
  | 'home.experienceAria'
  | 'home.experienceLabel'
  | 'home.experienceTitle'
  | 'home.experience.role1'
  | 'home.experience.company1'
  | 'home.experience.period1'
  | 'home.experience.role2'
  | 'home.experience.company2'
  | 'home.experience.period2'
  | 'home.experience.role3'
  | 'home.experience.company3'
  | 'home.experience.period3'
  | 'home.resumeAria'
  | 'home.resumeLabel'
  | 'home.resumeTitle'
  | 'home.resumeText'
  | 'home.resumeCta'
  | 'home.socialAria'
  | 'home.stackAria'
  | 'home.stackLabel'
  | 'home.stackTitle'
  | 'cv.label'
  | 'cv.title'
  | 'cv.brandSystems.title'
  | 'cv.brandSystems.description'
  | 'cv.digitalProducts.title'
  | 'cv.digitalProducts.description'
  | 'cv.contentStudios.title'
  | 'cv.contentStudios.description';

const translations: Record<Locale, Record<TranslationKey, string>> = {
  'pt-BR': {
    'language.en': 'Ingles',
    'language.pt': 'Portugues',
    'menu.home': 'Inicio',
    'menu.projects': 'Projetos',
    'menu.cv': 'CV',
    'menu.contact': 'Contato',
    'shell.navigation': 'Navegacao principal',
    'shell.languageToggle': 'Alterar idioma',
    'shell.themeToggle': 'Alterar tema',
    'theme.dark': 'Escuro',
    'theme.light': 'Claro',
    'home.eyebrow': 'Engenheira de software - Aspirante a escritora sci-fi',
    'home.overviewAria': 'Visao geral do portfolio',
    'home.logoAria': 'Monograma Veronica Ciolfi',
    'home.aboutLabel': 'Sobre mim',
    'home.aboutText':
      'Eu crio experiencias digitais cuidadosas para marcas ambiciosas, combinando interfaces limpas, visuais expressivos e narrativa focada.',
    'home.portraitAria': 'Ilustracao de retrato criativo',
    'home.skillsAria': 'Resumo de habilidades tecnicas',
    'home.skillsTitle': 'Dominio tecnico',
    'home.experienceAria': 'Resumo de experiencia profissional',
    'home.experienceLabel': 'Experiencia',
    'home.experienceTitle': 'Dez anos criando e entregando software.',
    'home.experience.role1': 'Engenheira de software',
    'home.experience.company1': 'Produtos digitais e sistemas web',
    'home.experience.period1': '2025 - Agora',
    'home.experience.role2': 'Desenvolvedora web senior',
    'home.experience.company2': 'Interfaces, acessibilidade e frontend',
    'home.experience.period2': '2023 - 2025',
    'home.experience.role3': 'Desenvolvedora full stack',
    'home.experience.company3': 'APIs, dashboards e experiencias responsivas',
    'home.experience.period3': '2018 - 2023',
    'home.resumeAria': 'Abrir curriculo completo em PDF',
    'home.resumeLabel': 'Curriculo',
    'home.resumeTitle': 'Curriculo completo em PDF.',
    'home.resumeText': 'Abra uma versao completa com trajetoria, projetos e experiencias em detalhes.',
    'home.resumeCta': 'Abrir PDF',
    'home.socialAria': 'Perfil profissional no LinkedIn',
    'home.stackAria': 'Ferramentas e stack principal',
    'home.stackLabel': 'Stack',
    'home.stackTitle': 'Ferramentas que eu busco primeiro.',
    'cv.label': 'CV',
    'cv.title': 'Colaboracoes selecionadas.',
    'cv.brandSystems.title': 'Sistemas de marca',
    'cv.brandSystems.description': 'Identidade, paginas de lancamento, direcao de arte para campanhas',
    'cv.digitalProducts.title': 'Produtos digitais',
    'cv.digitalProducts.description': 'Web apps, interfaces responsivas, design systems',
    'cv.contentStudios.title': 'Estudios de conteudo',
    'cv.contentStudios.description': 'Layouts editoriais, assets sociais, estrategia visual',
  },
  'en-US': {
    'language.en': 'English',
    'language.pt': 'Portugues',
    'menu.home': 'Home',
    'menu.projects': 'Projects',
    'menu.cv': 'CV',
    'menu.contact': 'Contact',
    'shell.navigation': 'Main navigation',
    'shell.languageToggle': 'Change language',
    'shell.themeToggle': 'Change theme',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'home.eyebrow': 'Software engineer - Aspiring Sci-fi writer',
    'home.overviewAria': 'Portfolio overview',
    'home.logoAria': 'Veronica Ciolfi monogram',
    'home.aboutLabel': 'About me',
    'home.aboutText':
      'I create thoughtful digital experiences for ambitious brands, blending clean interfaces, expressive visuals, and focused storytelling.',
    'home.portraitAria': 'Creative portrait illustration',
    'home.skillsAria': 'Technical skills summary',
    'home.skillsTitle': 'Technical Mastery',
    'home.experienceAria': 'Professional experience summary',
    'home.experienceLabel': 'Experience',
    'home.experienceTitle': 'Ten years of building and shipping software.',
    'home.experience.role1': 'Software engineer',
    'home.experience.company1': 'Digital products and web systems',
    'home.experience.period1': '2025 - Now',
    'home.experience.role2': 'Senior web developer',
    'home.experience.company2': 'Interfaces, accessibility, and frontend',
    'home.experience.period2': '2023 - 2025',
    'home.experience.role3': 'Full stack developer',
    'home.experience.company3': 'APIs, dashboards, and responsive experiences',
    'home.experience.period3': '2018 - 2023',
    'home.resumeAria': 'Open the full resume PDF',
    'home.resumeLabel': 'Resume',
    'home.resumeTitle': 'Full resume in PDF.',
    'home.resumeText': 'Open the complete version with background, projects, and experience in detail.',
    'home.resumeCta': 'Open PDF',
    'home.socialAria': 'Professional LinkedIn profile',
    'home.stackAria': 'Main tools and stack',
    'home.stackLabel': 'Stack',
    'home.stackTitle': 'Tools I reach for first.',
    'cv.label': 'CV',
    'cv.title': 'Selected collaborations.',
    'cv.brandSystems.title': 'Brand systems',
    'cv.brandSystems.description': 'Identity, launch pages, campaign art direction',
    'cv.digitalProducts.title': 'Digital products',
    'cv.digitalProducts.description': 'Web apps, responsive interfaces, design systems',
    'cv.contentStudios.title': 'Content studios',
    'cv.contentStudios.description': 'Editorial layouts, social assets, visual strategy',
  },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly locale = signal<Locale>('pt-BR');

  setLocale(locale: Locale): void {
    this.locale.set(locale);
  }

  t(key: TranslationKey): string {
    return translations[this.locale()][key];
  }
}

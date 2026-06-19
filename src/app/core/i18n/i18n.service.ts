import { Injectable, signal } from '@angular/core';

export type Locale = 'pt-BR' | 'en-US';

export type TranslationKey =
  | 'language.en'
  | 'language.pt'
  | 'menu.home'
  | 'menu.projects'
  | 'menu.blog'
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
  | 'home.whatsappAria'
  | 'home.latestProjectsAria'
  | 'home.latestProjectsLabel'
  | 'home.latestProjectsTitle'
  | 'home.latestProjectsCta'
  | 'home.latestPostsAria'
  | 'home.latestPostsLabel'
  | 'home.latestPostsTitle'
  | 'home.latestPostsCta'
  | 'home.meetingAria'
  | 'home.meetingEventTitle'
  | 'home.meetingLabel'
  | 'home.meetingTitle'
  | 'home.meetingText'
  | 'home.meetingCta'
  | 'home.stackAria'
  | 'home.stackLabel'
  | 'home.stackTitle'
  | 'pagination.previous'
  | 'pagination.next'
  | 'pagination.page'
  | 'pagination.of'
  | 'pagination.items'
  | 'blog.kicker'
  | 'blog.title'
  | 'blog.description'
  | 'blog.listAria'
  | 'blog.readPost'
  | 'blog.backToBlog'
  | 'blog.articleAria'
  | 'blog.copyCode'
  | 'blog.copiedCode'
  | 'blog.notFound'
  | 'blog.notFoundText'
  | 'blog.paginationAria'
  | 'projects.kicker'
  | 'projects.title'
  | 'projects.description'
  | 'projects.galleryAria'
  | 'projects.visitProject'
  | 'projects.paginationAria'
  | 'cv.label'
  | 'cv.title'
  | 'cv.timelineAria'
  | 'cv.timelineLabel'
  | 'cv.timelineTitle'
  | 'cv.timeline1.period'
  | 'cv.timeline1.location'
  | 'cv.timeline1.employer'
  | 'cv.timeline1.role'
  | 'cv.timeline1.contract'
  | 'cv.timeline1.company'
  | 'cv.timeline1.description'
  | 'cv.timeline1.point1'
  | 'cv.timeline1.point2'
  | 'cv.timeline1.point3'
  | 'cv.timeline1.point4'
  | 'cv.timeline1.point5'
  | 'cv.timeline1.point6'
  | 'cv.timeline2.period'
  | 'cv.timeline2.location'
  | 'cv.timeline2.employer'
  | 'cv.timeline2.role'
  | 'cv.timeline2.contract'
  | 'cv.timeline2.company'
  | 'cv.timeline2.description'
  | 'cv.timeline2.point1'
  | 'cv.timeline2.point2'
  | 'cv.timeline2.point3'
  | 'cv.timeline2.point4'
  | 'cv.timeline2.point5'
  | 'cv.timeline3.period'
  | 'cv.timeline3.location'
  | 'cv.timeline3.employer'
  | 'cv.timeline3.role'
  | 'cv.timeline3.contract'
  | 'cv.timeline3.company'
  | 'cv.timeline3.description';

const translations: Record<Locale, Record<TranslationKey, string>> = {
  'pt-BR': {
    'language.en': 'Ingles',
    'language.pt': 'Portugues',
    'menu.home': 'Inicio',
    'menu.projects': 'Projetos',
    'menu.blog': 'Blog',
    'shell.navigation': 'Navegacao principal',
    'shell.languageToggle': 'Alterar idioma',
    'shell.themeToggle': 'Alterar tema',
    'theme.dark': 'Escuro',
    'theme.light': 'Claro',
    'home.eyebrow': 'Engenheira de software - Escritora sci-fi nas horas vagas',
    'home.overviewAria': 'Visao geral do portfolio',
    'home.logoAria': 'Monograma Veronica Ciolfi',
    'home.aboutLabel': 'Sobre mim',
    'home.aboutText':
      'Sou desenvolvedora frontend em São Paulo, Brasil, com 8 anos de experiência transformando ideias em experiências digitais elegantes e funcionais. Adoro construir interfaces intuitivas, explorar detalhes de design e criar produtos que pareçam tão bons quanto funcionam. Fora do código, escrevo ficção científica e acredito que toda boa experiência começa com uma boa história.',
    'home.portraitAria': 'Ilustracao de retrato criativo',
    'home.skillsAria': 'Resumo de habilidades tecnicas',
    'home.skillsTitle': 'Habilidades Técnicas',
    'home.experienceAria': 'Resumo de experiencia profissional',
    'home.experienceLabel': 'Experiência',
    'home.experienceTitle': 'Dez anos criando e entregando software.',
    'home.experience.role1': 'Engenheira de software sênior',
    'home.experience.company1': 'Arquitetura frontend, qualidade e escalabilidade',
    'home.experience.period1': '2025 - Agora',
    'home.experience.role2': 'Desenvolvedora frontend sênior',
    'home.experience.company2': 'Angular, React, acessibilidade e design systems',
    'home.experience.period2': '2023 - 2025',
    'home.experience.role3': 'Desenvolvedora full stack',
    'home.experience.company3': 'APIs, integrações financeiras e experiência do usuário',
    'home.experience.period3': '2018 - 2023',
    'home.resumeAria': 'Abrir curriculo completo em PDF',
    'home.resumeLabel': 'Curriculo',
    'home.resumeTitle': 'Currículo completo em PDF',
    'home.resumeText':
      'Uma visão detalhada da minha experiência, projetos e evolução profissional.',
    'home.resumeCta': 'Abrir PDF',
    'home.socialAria': 'Perfil profissional no LinkedIn',
    'home.whatsappAria': 'Conversar no WhatsApp',
    'home.latestProjectsAria': 'Previa dos ultimos projetos',
    'home.latestProjectsLabel': 'Projetos',
    'home.latestProjectsTitle': 'Ultimos projetos.',
    'home.latestProjectsCta': 'Ver todos',
    'home.latestPostsAria': 'Previa dos ultimos posts',
    'home.latestPostsLabel': 'Blog',
    'home.latestPostsTitle': 'Ultimos posts.',
    'home.latestPostsCta': 'Abrir blog',
    'home.meetingAria': 'Agendar call no Google Meet',
    'home.meetingEventTitle': 'Call com Veronica Ciolfi',
    'home.meetingLabel': 'Meet',
    'home.meetingTitle': 'Agende uma call.',
    'home.meetingText': 'Vamos fazer uma call rapidinho?',
    'home.meetingCta': 'Agendar',
    'home.stackAria': 'Ferramentas e stack principal',
    'home.stackLabel': 'Stack',
    'home.stackTitle': 'Stacks que eu uso sempre.',
    'pagination.previous': 'Anterior',
    'pagination.next': 'Proxima',
    'pagination.page': 'Pagina',
    'pagination.of': 'de',
    'pagination.items': 'itens',
    'blog.kicker': 'Blog',
    'blog.title': 'Notas sobre frontend, sistemas e tecnologia criativa.',
    'blog.description':
      'Uma listagem leve de posts alimentada por JSON mockado para poder evoluir depois para um fluxo real de conteudo.',
    'blog.listAria': 'Lista de posts do blog',
    'blog.readPost': 'Ler post',
    'blog.backToBlog': 'Voltar para o blog',
    'blog.articleAria': 'Artigo do blog',
    'blog.copyCode': 'Copiar codigo',
    'blog.copiedCode': 'Copiado',
    'blog.notFound': 'Post nao encontrado.',
    'blog.notFoundText':
      'Esse artigo nao existe ou ainda nao foi publicado nessa versao do portfolio.',
    'blog.paginationAria': 'Paginacao do blog',
    'projects.kicker': 'Projetos',
    'projects.title':
      'Projetos selecionados entre sistemas frontend, superficies de produto e experimentos criativos.',
    'projects.description':
      'Uma galeria simples de cards de projeto com conteudo mockado, pronta para ser substituida por estudos de caso reais depois.',
    'projects.galleryAria': 'Galeria de projetos',
    'projects.visitProject': 'Visitar projeto',
    'projects.paginationAria': 'Paginacao de projetos',
    'cv.label': 'CV',
    'cv.title': 'Colaboracoes selecionadas.',
    'cv.timelineAria': 'Resumo de experiencia profissional e academica',
    'cv.timelineLabel': 'Experiencia',
    'cv.timelineTitle': 'Resumo de experiencia Profissional / Academica',
    'cv.timeline1.period': '11/2023 - 11/2025',
    'cv.timeline1.location': 'Remoto',
    'cv.timeline1.employer': 'Provider IT - Programadora Frontend Senior',
    'cv.timeline1.role': 'Desenvolvedora Senior Angular',
    'cv.timeline1.contract': 'Contrato CLT',
    'cv.timeline1.company': 'PDTec (B3)',
    'cv.timeline1.description':
      'Meu primeiro desafio foi na PDTec, empresa do ecossistema B3, onde trabalhei no desenvolvimento de um sistema voltado a padronizacao e otimizacao do gerenciamento de documentos virtuais. Atuei do inicio ao fim do projeto, com participacao ativa em todas as etapas:',
    'cv.timeline1.point1':
      'Envolvimento direto nas fases de concepcao, modelagem e definicao arquitetural;',
    'cv.timeline1.point2':
      'Configuracao e manutencao dos ambientes de desenvolvimento, qualidade e producao na Azure;',
    'cv.timeline1.point3':
      'Diagnostico e solucao de problemas em pipelines, alem da criacao de fluxos automatizados de CI/CD;',
    'cv.timeline1.point4':
      'Desenvolvimento completo do frontend com Angular 16, criando o produto do zero;',
    'cv.timeline1.point5':
      'Implementacao e manutencao de uma base solida de testes, garantindo cobertura minima de 90%;',
    'cv.timeline1.point6':
      'Definicao de padroes de codigo, estruturacao da arquitetura frontend e desenvolvimento de funcionalidades exclusivas, aplicando Clean Architecture, Clean Code e SOLID.',
    'cv.timeline2.period': '07/2022 - 11/2023',
    'cv.timeline2.location': 'Remoto',
    'cv.timeline2.employer': 'Pontomais (atual VR Gente) - Programadora Front-End Angular',
    'cv.timeline2.role': 'Onboarding e User Tour',
    'cv.timeline2.contract': 'Contrato CLT',
    'cv.timeline2.company': 'Pontomais (atual VR Gente)',
    'cv.timeline2.description':
      'Fiz parte da equipe responsável pelo Onboarding e User Tour de um produto voltado a otimizar processos de Recursos Humanos, incluindo registro de ponto, geração de relatórios e gestão de folha de pagamento. A solução é distribuída nas plataformas web, iOS e Android, garantindo acessibilidade e escalabilidade para diferentes tipos de empresas.',
    'cv.timeline2.point1':
      'Desenvolvimento dos componentes da versão Web (SaaS), criando interfaces intuitivas e eficientes;',
    'cv.timeline2.point2':
      'Implementação do Wizard e do Tour de primeiros passos para orientar novos usuários;',
    'cv.timeline2.point3':
      'Atuação com Angular 8, React Native, HTML5, Sass, Bootstrap e Typescript;',
    'cv.timeline2.point4':
      'Papel importante como Code Reviewer, garantindo padronização, qualidade e sustentabilidade do código;',
    'cv.timeline2.point5':
      'Mentoria de outros desenvolvedores, apoiando a evolução técnica da equipe;',
    'cv.timeline3.period': '11/2021 - 07/2022',
    'cv.timeline3.location': 'São Paulo - SP',
    'cv.timeline3.employer': '77Seg, Programadora Mobile (React Native)',
    'cv.timeline3.role': 'Experiencia em Mobile e Produto',
    'cv.timeline3.contract': 'Prestadora de Serviços',
    'cv.timeline3.company': '77Seg',
    'cv.timeline3.description':
      'Contribuí para a equipe responsável pela reformulação completa do design de um aplicativo de benefícios para segurados, distribuído nas plataformas web, iOS e Android. Atuei desenhando a interface e a experiência dos componentes de maneira funcional, moderna e intuitiva, garantindo maior usabilidade e acesso rápido às principais funcionalidades.',
  },
  'en-US': {
    'language.en': 'English',
    'language.pt': 'Portugues',
    'menu.home': 'Home',
    'menu.projects': 'Projects',
    'menu.blog': 'Blog',
    'shell.navigation': 'Main navigation',
    'shell.languageToggle': 'Change language',
    'shell.themeToggle': 'Change theme',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'home.eyebrow': 'Software engineer - Part-time sci-fi writer',
    'home.overviewAria': 'Portfolio overview',
    'home.logoAria': 'Veronica Ciolfi monogram',
    'home.aboutLabel': 'About me',
    'home.aboutText':
      "Based in São Paulo, Brazil, I have spent the last 8 years designing and building digital experiences where technology, design, and storytelling meet. I'm passionate about frontend development, thoughtful user experiences, and the small details that make products feel alive. Outside of work, I write science fiction and publish stories for fun.",
    'home.portraitAria': 'Creative portrait illustration',
    'home.skillsAria': 'Technical skills summary',
    'home.skillsTitle': 'Technical Skills',
    'home.experienceAria': 'Professional experience summary',
    'home.experienceLabel': 'Experience',
    'home.experienceTitle': 'Ten years building products that people use.',
    'home.experience.role1': 'Senior Software Engineer',
    'home.experience.company1': 'Scalable systems, technical leadership and product development',
    'home.experience.period1': '2025 - Now',
    'home.experience.role2': 'Senior Frontend Engineer',
    'home.experience.company2': 'Angular, React and scalable user interfaces',
    'home.experience.period2': '2023 - 2025',
    'home.experience.role3': 'Full Stack Developer',
    'home.experience.company3': 'Web applications, APIs and backend services',
    'home.experience.period3': '2018 - 2023',
    'home.resumeAria': 'Open the full resume PDF',
    'home.resumeLabel': 'Resume',
    "home.resumeTitle": "Full Resume (PDF)",
"home.resumeText": "A detailed overview of my experience, projects, and professional growth.",
    'home.resumeCta': 'Open PDF',
    'home.socialAria': 'Professional LinkedIn profile',
    'home.whatsappAria': 'Start a conversation on WhatsApp',
    'home.latestProjectsAria': 'Latest projects preview',
    'home.latestProjectsLabel': 'Projects',
    'home.latestProjectsTitle': 'Latest projects.',
    'home.latestProjectsCta': 'View all',
    'home.latestPostsAria': 'Latest posts preview',
    'home.latestPostsLabel': 'Blog',
    'home.latestPostsTitle': 'Latest posts.',
    'home.latestPostsCta': 'Open blog',
    'home.meetingAria': 'Schedule a Google Meet call',
    'home.meetingEventTitle': 'Call with Veronica Ciolfi',
    'home.meetingLabel': 'Meet',
    'home.meetingTitle': 'Schedule a call.',
    'home.meetingText': 'How about a 30 min call with me?',
    'home.meetingCta': 'Schedule',
    'home.stackAria': 'Main tools and stack',
    'home.stackLabel': 'Stack',
    'home.stackTitle': 'Tools I always reach for.',
    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
    'pagination.page': 'Page',
    'pagination.of': 'of',
    'pagination.items': 'items',
    'blog.kicker': 'Blog',
    'blog.title': 'Notes on frontend, systems, and creative technology.',
    'blog.description':
      'A lightweight post index fed by mocked JSON so the page can grow into a real content flow later.',
    'blog.listAria': 'Blog posts list',
    'blog.readPost': 'Read post',
    'blog.backToBlog': 'Back to blog',
    'blog.articleAria': 'Blog article',
    'blog.copyCode': 'Copy code',
    'blog.copiedCode': 'Copied',
    'blog.notFound': 'Post not found.',
    'blog.notFoundText':
      'This article does not exist or has not been published in this portfolio version yet.',
    'blog.paginationAria': 'Blog pagination',
    'projects.kicker': 'Projects',
    'projects.title':
      'Selected builds across frontend systems, product surfaces, and creative experiments.',
    'projects.description':
      'A simple gallery of project cards with mocked content, ready to be replaced by real case studies later.',
    'projects.galleryAria': 'Project gallery',
    'projects.visitProject': 'Visit project',
    'projects.paginationAria': 'Projects pagination',
    'cv.label': 'CV',
    'cv.title': 'Selected collaborations.',
    'cv.timelineAria': 'Professional and academic experience summary',
    'cv.timelineLabel': 'Experience',
    'cv.timelineTitle': 'Professional / Academic experience summary',
    'cv.timeline1.period': '11/2023 - 11/2025',
    'cv.timeline1.location': 'Remote',
    'cv.timeline1.employer': 'Provider IT - Senior Frontend Developer',
    'cv.timeline1.role': 'Senior Angular Developer',
    'cv.timeline1.contract': 'Full-time contract',
    'cv.timeline1.company': 'PDTec (B3)',
    'cv.timeline1.description':
      'My first challenge was at PDTec, part of the B3 ecosystem, where I worked on a system focused on standardizing and streamlining virtual document management. I participated from start to finish, actively involved in every stage:',
    'cv.timeline1.point1':
      'Direct involvement in conception, modeling, and architectural definition;',
    'cv.timeline1.point2':
      'Setup and maintenance of development, quality, and production environments on Azure;',
    'cv.timeline1.point3': 'Troubleshooting pipelines and creating automated CI/CD flows;',
    'cv.timeline1.point4':
      'End-to-end frontend development with Angular 16, building the product from scratch;',
    'cv.timeline1.point5':
      'Implementation and maintenance of a solid test base, ensuring a minimum 90% coverage;',
    'cv.timeline1.point6':
      'Definition of coding standards, frontend architecture structuring, and development of exclusive features, applying Clean Architecture, Clean Code, and SOLID.',
    'cv.timeline2.period': '07/2022 - 11/2023',
    'cv.timeline2.location': 'Remote',
    'cv.timeline2.employer': 'Pontomais (now VR Gente) - Frontend Angular Developer',
    'cv.timeline2.role': 'Onboarding and User Tour',
    'cv.timeline2.contract': 'Full-time contract',
    'cv.timeline2.company': 'Pontomais (now VR Gente)',
    'cv.timeline2.description':
      'I was part of the team responsible for Onboarding and User Tour for a product designed to streamline Human Resources processes, including time tracking, report generation, and payroll management. The solution is delivered across web, iOS, and Android, ensuring accessibility and scalability for different types of companies.',
    'cv.timeline2.point1':
      'Development of Web (SaaS) components, creating intuitive and efficient interfaces;',
    'cv.timeline2.point2':
      'Implementation of the Wizard and the first steps tour to guide new users;',
    'cv.timeline2.point3':
      'Work with Angular 8, React Native, HTML5, Sass, Bootstrap, and TypeScript;',
    'cv.timeline2.point4':
      'Important role as Code Reviewer, ensuring code standardization, quality, and sustainability;',
    'cv.timeline2.point5':
      'Mentoring other developers, supporting the technical growth of the team;',
    'cv.timeline3.period': '11/2021 - 07/2022',
    'cv.timeline3.location': 'Sao Paulo - SP',
    'cv.timeline3.employer': '77Seg, Mobile Developer (React Native)',
    'cv.timeline3.role': 'Mobile and product experience',
    'cv.timeline3.contract': 'Service provider',
    'cv.timeline3.company': '77Seg',
    'cv.timeline3.description':
      'I contributed to the team responsible for a complete redesign of an insurance benefits app, delivered across web, iOS, and Android. I worked on the interface and component experience in a functional, modern, and intuitive way, improving usability and providing quick access to the main features.',
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

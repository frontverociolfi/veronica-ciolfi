import { Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell';
import { Home } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { BlogComponent } from './pages/blog/blog';
import { BlogPostDetailComponent } from './pages/blog/post-detail/blog-post-detail';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },     
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blog/:slug',
        component: BlogPostDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

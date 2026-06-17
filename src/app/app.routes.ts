import { Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell';
import { Home } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { CvComponent } from './pages/cv/cv';
import { ProjectsComponent } from './pages/projects/projects';

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
        path: 'cv',
        component: CvComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

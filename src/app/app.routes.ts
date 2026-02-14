import { Routes     } from '@angular/router';
import { AboutPage  } from './about/about';
import { NotFound   } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: AboutPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'home',
    component: AboutPage,
  },
  {
    path: '**',
    component: NotFound,
    pathMatch: 'full',
  }
];

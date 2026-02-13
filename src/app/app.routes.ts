import { Routes    } from '@angular/router';
import { AboutPage  } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: AboutPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
];

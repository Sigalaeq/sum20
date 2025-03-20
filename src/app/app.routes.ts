import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'series',
    loadComponent: () => import('./series/series.page').then(m => m.SeriesPage)
  },

  {
    path: 'forgot',
    loadComponent: () => import('./forgot/forgot.page').then(m => m.ForgotPage)
  },
  {
    path: 'sign',
    loadComponent: () => import('./sign/sign.page').then(m => m.SignPage)
  },
];
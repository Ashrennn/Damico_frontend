import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'operations',
    loadComponent: () => import('./pages/operations/operations.component')
      .then(m => m.OperationsComponent)
  },
  {
    path: 'library',
    loadComponent: () => import('./pages/library/library.component')
      .then(m => m.LibraryComponent)
  },
  {
    path: 'bunkering',
    loadComponent: () => import('./pages/bunkering/bunkering.component')
      .then(m => m.BunkeringComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent)
  },
  {
    path: 'dmc-csr',
    loadComponent: () => import('./pages/dmc-csr/dmc-csr.component')
      .then(m => m.DmcCsrComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

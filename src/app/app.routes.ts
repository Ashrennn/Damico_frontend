import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OperationsComponent } from './components/operations/operations.component';
import { LibraryComponent } from './components/library/library.component';
import { BunkeringComponent } from './components/bunkering/bunkering.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'bunkering', component: BunkeringComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

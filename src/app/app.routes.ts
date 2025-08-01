import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OperationsComponent } from './components/operations/operations.component';
import { LibraryComponent } from './components/library/library.component';
import { BunkeringComponent } from './components/bunkering/bunkering.component';
import { ContactComponent } from './components/contact/contact.component';
import { DmcCsrComponent } from './components/dmc-csr/dmc-csr.component';
import { WhoAreWeComponent } from './components/about/who-are-we/who-are-we.component';
import { OurHistoryComponent } from './components/about/our-history/our-history.component';
import { OurTimelineComponent } from './components/about/our-timeline/our-timeline.component';
import { OurTeamComponent } from './components/about/our-team/our-team.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'bunkering', component: BunkeringComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dmc-csr', component: DmcCsrComponent },
  { path: 'who-are-we', component: WhoAreWeComponent },
  { path: 'our-history', component: OurHistoryComponent },
  { path: 'our-timeline', component: OurTimelineComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: '**', redirectTo: '' }
];

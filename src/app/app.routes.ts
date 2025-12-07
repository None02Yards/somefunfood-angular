import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
export const routes: Routes = [
  { path: '', component: WelcomePageComponent },    // default route (landing page)
  { path: 'home', component: HomeComponent },       // Home page route
  { path: 'about', component: AboutComponent },     // About page route
  { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard route to catch unknown URLs
];

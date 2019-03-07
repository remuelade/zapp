import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FragenlisteComponent } from './fragenliste/fragenliste.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FrageDetailsComponent } from './frage-details/frage-details.component';



export const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },    
  {
      path: 'fragen',
      component: FragenlisteComponent
  },
  {
    path: 'fragen/:id',
    component: FrageDetailsComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'home',
      component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
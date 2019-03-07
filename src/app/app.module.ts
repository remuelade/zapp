import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FragenlisteComponent } from './fragenliste/fragenliste.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FrageListeItemComponent } from './frage-liste-item/frage-liste-item.component';
import { FrageDetailsComponent } from './frage-details/frage-details.component';
import { FrageServiceService } from './shared/frage-service.service';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FragenlisteComponent,
    HomeComponent,
    AboutComponent,
    FrageListeItemComponent,
    FrageDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FrageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

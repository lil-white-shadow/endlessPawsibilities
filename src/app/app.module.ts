import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './components/image/image.component';
import { LearnComponent } from './components/learn/learn.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlayComponent } from './components/play/play.component';
import { BreedsInPlayComponent } from './components/breedsInPlay/breedsInPlay.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    ImageComponent,
    LearnComponent,
    HomeComponent,
    AboutComponent,
    PlayComponent,
    BreedsInPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

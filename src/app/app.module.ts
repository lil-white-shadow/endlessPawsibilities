import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomImageComponent } from './components/random-image/random-image.component';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    RandomImageComponent,
    GameplayComponent,
    HomeComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './components/image/image.component';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    ImageComponent,
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

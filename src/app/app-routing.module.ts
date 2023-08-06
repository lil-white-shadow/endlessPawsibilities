import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './components/learn/learn.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlayComponent } from './components/play/play.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'play', component: PlayComponent},
  { path: 'learn', component: LearnComponent},
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

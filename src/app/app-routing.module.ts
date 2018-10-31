import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

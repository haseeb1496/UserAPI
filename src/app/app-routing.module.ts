import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'home/edit/:id', component: UserEditComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

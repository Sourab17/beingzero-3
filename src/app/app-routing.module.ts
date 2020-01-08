import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {ColorsComponent} from './colors/colors.component';

const routes: Routes = [{path:'countries',component: CountriesComponent},{path:'home',component: HomeComponent},{path:'users',component: UsersComponent},{path:'colors',component: ColorsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

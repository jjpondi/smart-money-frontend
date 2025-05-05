import { Routes } from '@angular/router';
import {CategoryPageComponent} from './pages/categories/category-page/category-page.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryTabsComponent } from './pages/categories/category-tabs/category-tabs.component';


//export const routes: Routes = [
  //{path: '', component: HomeComponent},
  //{path: 'categories', component: CategoryPageComponent},
  //{path: '**', redirectTo: '', pathMatch: 'full'}, //ca cest etre rediriger vers home si le path est faux
//]

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoryTabsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}, //ca cest etre rediriger vers home si le path est faux
];
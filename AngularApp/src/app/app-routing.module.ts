import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:AuthComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component:C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

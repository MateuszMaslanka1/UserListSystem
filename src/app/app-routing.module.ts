import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {UserDetailsComponent} from './user-details/user-details.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'details/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

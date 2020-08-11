import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserTableComponent} from './user-table/user-table.component';


const routes: Routes = [
  {path: '', component: UserTableComponent},
  {path: 'details/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

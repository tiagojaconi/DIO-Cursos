import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  { path: 'users-list', component: UsersListComponent},
  { path: 'users-form', component: UsersFormComponent},
  { path: 'users-form/:id', component: UsersFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

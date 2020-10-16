import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlService } from 'src/app/core/services/control.service';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';

const routes: Routes = [
  { path: '', component: PageListUsersComponent },
  { path: 'add', canActivate: [ControlService], component: PageAddUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

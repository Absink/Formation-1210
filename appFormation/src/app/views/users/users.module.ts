import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageListUsersComponent, PageAddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }

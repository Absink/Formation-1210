import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentRoutingModule } from './authent-routing.module';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormAddUserComponent, PageLoginComponent],
  imports: [
    CommonModule,
    AuthentRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthentModule { }

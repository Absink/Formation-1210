import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentRoutingModule } from './authent-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    AuthentRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthentModule { }

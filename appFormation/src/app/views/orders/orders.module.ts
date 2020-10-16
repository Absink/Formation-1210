import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { RouterModule } from '@angular/router';
import { PageTestComponent } from './pages/page-test/page-test.component';


@NgModule({
  declarations: [PageListOrdersComponent, FormAddOrderComponent, PageAddOrderComponent, PageTestComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class OrdersModule { }

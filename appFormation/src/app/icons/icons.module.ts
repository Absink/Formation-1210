import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconPoweroffComponent } from './icon-poweroff/icon-poweroff.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';



@NgModule({
  declarations: [IconNavComponent, IconEditComponent, IconPoweroffComponent, IconFilterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ], exports: [
    IconNavComponent,
    IconEditComponent,
    IconPoweroffComponent,
    IconFilterComponent
  ]
})
export class IconsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { Days2Pipe } from './pipes/days2.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorDaysDirective } from './directives/color-days.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TotalPipe,
    DaysPipe,
    Days2Pipe,
    ColorStateDirective,
    ColorDaysDirective,
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TotalPipe,
    DaysPipe,
    Days2Pipe,
    ColorStateDirective,
    ColorDaysDirective,
    BtnComponent
  ]
})
export class SharedModule { }

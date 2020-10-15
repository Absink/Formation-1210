import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { TableDarkComponent } from './table-dark/table-dark.component';
import { TableStripedComponent } from './table-striped/table-striped.component';
import { TitreAComponent } from './titre-a/titre-a.component';
import { TitreBComponent } from './titre-b/titre-b.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TableStripedComponent, TitreAComponent, TitreBComponent],
  imports: [
    CommonModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStripedComponent,
    TitreAComponent,
    TitreBComponent
  ]
})
export class TemplatesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { TableDarkComponent } from './table-dark/table-dark.component';
import { TableStripedComponent } from './table-striped/table-striped.component';
import { TitreAComponent } from './titre-a/titre-a.component';
import { TitreBComponent } from './titre-b/titre-b.component';
import { TextsModule } from '../texts/texts.module';
import { TitreCComponent } from './titre-c/titre-c.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TableStripedComponent, TitreAComponent, TitreBComponent, TitreCComponent],
  imports: [
    CommonModule,
    TextsModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStripedComponent,
    TitreAComponent,
    TitreBComponent,
    TitreCComponent
  ]
})
export class TemplatesModule { }

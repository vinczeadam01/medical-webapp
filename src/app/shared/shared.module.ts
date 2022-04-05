import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MesurementTableComponent } from './mesurement-table/mesurement-table.component';



@NgModule({
  declarations: [MenuComponent, MesurementTableComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, MesurementTableComponent]
})
export class SharedModule { }

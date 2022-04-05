import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MesurementTableComponent } from './mesurement-table/mesurement-table.component';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [MenuComponent, MesurementTableComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [MenuComponent, MesurementTableComponent]
})
export class SharedModule { }
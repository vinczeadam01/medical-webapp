import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MesurementTableComponent } from './mesurement-table/mesurement-table.component';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [MenuComponent, MesurementTableComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [MenuComponent, MesurementTableComponent]
})
export class SharedModule { }

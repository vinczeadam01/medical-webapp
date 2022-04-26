import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DialogOverviewExampleDialog, measurementTableComponent } from './measurement-table/measurement-table.component';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [MenuComponent, measurementTableComponent, DialogOverviewExampleDialog, SendmessageComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [MenuComponent, measurementTableComponent, SendmessageComponent]
})
export class SharedModule { }

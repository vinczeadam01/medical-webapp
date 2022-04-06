import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HistoryComponent } from './pages/history/history.component';
import { AddComponent } from './pages/add/add.component';
import { MessageComponent } from './pages/message/message.component';


@NgModule({
  declarations: [
    PatientComponent,
    HistoryComponent,
    AddComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class PatientModule { }

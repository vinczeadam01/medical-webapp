import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ResultsComponent } from './pages/results/results.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { MessageComponent } from './pages/message/message.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DoctorComponent,
    ResultsComponent,
    PatientsComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class DoctorModule { }

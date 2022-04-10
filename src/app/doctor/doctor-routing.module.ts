import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { MessageComponent } from './pages/message/message.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  { path: '', component: DoctorComponent, children: [
    { path: 'results', component: ResultsComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'message', component: MessageComponent },
    { path: '', redirectTo: '/doctor/results', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }

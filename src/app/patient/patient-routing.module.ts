import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HistoryComponent } from './pages/history/history.component';
import { MessageComponent } from './pages/message/message.component';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: '', component: PatientComponent, children: [
    { path: 'history', component: HistoryComponent },
    { path: 'add', component: AddComponent },
    { path: 'message', component: MessageComponent },
    { path: '', redirectTo: '/patient/history', pathMatch: 'full'},
  ] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: '', component: PatientComponent, children: [
    { path: 'table', component: TableComponent }
  ] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }

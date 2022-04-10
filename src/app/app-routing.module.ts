import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginGuard } from './shared/services/login.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] }, 
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule), canActivate: [LoginGuard] },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
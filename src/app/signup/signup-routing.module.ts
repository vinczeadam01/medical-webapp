import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../shared/services/login.guard';
import { SignupComponent } from './signup.component';

const routes: Routes = [{ path: '', component: SignupComponent, canActivate: [LoginGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }

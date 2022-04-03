import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./pages/shared/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./pages/shared/signup/signup.module').then(m => m.SignupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

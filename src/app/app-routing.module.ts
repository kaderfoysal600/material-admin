import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
    // canActivate: [AdminAuthGuard]
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
    // canActivate: [AdminAuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

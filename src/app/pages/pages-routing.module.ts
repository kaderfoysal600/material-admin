import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BreadcrumbService } from '../service/breadcrumb.service';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    data: { breadcrumb: 'Dashboard' } ,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        // data: { breadcrumb: 'Dashboard' } 
      },
      {
        path: 'pages/tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),

      },
      {
        path: 'external',
        loadChildren: () => import('./external-page/external-page.module').then(m => m.ExternalPageModule),
      },
      {
        path: 'form-input',
        loadChildren: () => import('./form-input/form-input.module').then(m => m.FormInputModule),

      },
      {
        path: 'pages/editors/ckeditor',
        loadChildren: () => import('./editos/editos.module').then(m => m.EditosModule),
        data: { breadcrumb: 'ckeditor' },
      },

      {
        path: 'pages/editors/tinymce',
        loadChildren: () => import('./tinymce/tinymce.module').then(m => m.TinymceModule),
        data: { breadcrumb: 'tinymce' },
      },
      {
        path: 'pages/maps',
        loadChildren: () => import('./maps/maps.module')
          .then(m => m.MapsModule),

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [BreadcrumbService],
})
export class PagesRoutingModule { }

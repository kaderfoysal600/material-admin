import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';

const routes: Routes = [{
  path:'',
  component:TablesComponent,
  data: { breadcrumb: 'Smart Table' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }

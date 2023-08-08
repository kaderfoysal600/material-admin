import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInputComponent } from './form-input.component';

const routes: Routes = [{
  path:'',
  component:FormInputComponent,
  data: { breadcrumb: 'Form Input' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInputRoutingModule { }

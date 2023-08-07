import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TinymceComponent } from './tinymce.component';

const routes: Routes = [{
  path:'',
  component:TinymceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinymceRoutingModule { }

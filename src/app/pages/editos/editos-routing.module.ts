import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditosComponent } from './editos.component';

const routes: Routes = [{
  path:'',
  component:EditosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditosRoutingModule { }

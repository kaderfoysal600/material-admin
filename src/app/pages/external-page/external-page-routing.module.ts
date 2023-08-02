import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalPageComponent } from './external-page.component';

const routes: Routes = [{
  path:'',
  component:ExternalPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalPageRoutingModule { }

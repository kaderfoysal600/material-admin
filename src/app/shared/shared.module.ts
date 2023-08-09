import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutSideClickDirective } from './out-side-click.directive';



@NgModule({
  declarations: [
    OutSideClickDirective
  ],
  exports:[
    OutSideClickDirective
  ],

  imports: [
    CommonModule
  ]
})
export class SharedModule { }

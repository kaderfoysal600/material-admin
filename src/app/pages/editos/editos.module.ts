import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditosRoutingModule } from './editos-routing.module';
import { EditosComponent } from './editos.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    EditosComponent
  ],
  imports: [
    CommonModule,
    EditosRoutingModule,
    CKEditorModule
  ]
})
export class EditosModule { }

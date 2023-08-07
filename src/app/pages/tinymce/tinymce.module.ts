import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinymceRoutingModule } from './tinymce-routing.module';
import { TinymceComponent } from './tinymce.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    TinymceComponent
  ],
  imports: [
    CommonModule,
    TinymceRoutingModule,
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class TinymceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalPageRoutingModule } from './external-page-routing.module';
import { ExternalPageComponent } from './external-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExternalPageComponent
  ],
  imports: [
    CommonModule,
    ExternalPageRoutingModule,
    HttpClientModule
  ]
})
export class ExternalPageModule { }

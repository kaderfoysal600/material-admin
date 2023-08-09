import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    BreadcrumbModule,
  ]
})
export class PagesModule { }

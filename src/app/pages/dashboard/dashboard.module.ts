import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatIconModule} from '@angular/material/icon';
import { LineCartComponent } from './line-cart/line-cart.component'
@NgModule({
  declarations: [
    DashboardComponent,
    LineCartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule
  
  ]
})
export class DashboardModule { }

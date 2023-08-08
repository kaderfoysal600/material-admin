import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    GoogleMapsModule,
    LeafletModule
  ],
})
export class MapsModule { }

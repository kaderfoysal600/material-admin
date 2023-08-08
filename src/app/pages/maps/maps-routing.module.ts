import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LeafletComponent } from './leaflet/leaflet.component';

const routes: Routes = [{
  path: '',
  component: MapsComponent,
  data: { breadcrumb: 'Maps' },
  children: [{
    path: 'gmaps',
    component: GoogleMapComponent,
    data: { breadcrumb: 'Google Maps' }
  },
  {
    path: 'leaflet',
    component: LeafletComponent,
    data: { breadcrumb: 'Leaflet Maps' }
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  GoogleMapComponent,
  LeafletComponent
];

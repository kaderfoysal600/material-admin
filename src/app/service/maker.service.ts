import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { LatLngExpression } from "leaflet";
@Injectable({
  providedIn: 'root'
})
export class MakerService {
  coords: any;
  coordsChange: Subject<LatLngExpression> = new Subject<LatLngExpression>();

  constructor() {
    this.coords = [];
  }

  change(coords: Array<number>) {
    this.coords = coords;
    this.coordsChange.next(this.coords);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  readonly position = { lat: 23.774611741054937, lng: 90.41599042306966 };
  constructor() { }

  ngOnInit(): void {
  }


}

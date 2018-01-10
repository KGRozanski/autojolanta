import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { MapTypeControlStyle } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 52.211174;
  lng: number = 20.759908;
  zoom: number = 13;


  constructor() { }

  ngOnInit() {
  }

}

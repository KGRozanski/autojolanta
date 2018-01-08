import { Component, OnInit } from '@angular/core';


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

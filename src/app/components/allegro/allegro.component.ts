import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-allegro',
  templateUrl: './allegro.component.html',
  styleUrls: ['./allegro.component.css']
})

export class AllegroComponent {

  constructor(private http: HttpClient) {}
}
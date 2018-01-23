import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allegro',
  templateUrl: './allegro.component.html',
  styleUrls: ['./allegro.component.css']
})
export class AllegroComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://webapi.allegro.pl/').subscribe(data => {
      console.log(data);
    });
  }

}

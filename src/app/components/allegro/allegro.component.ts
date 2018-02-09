import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


declare var $: any;
@Component({
  selector: 'app-allegro',
  templateUrl: './allegro.component.html',
  styleUrls: ['./allegro.component.css']
})

export class AllegroComponent implements OnInit {

  constructor(private http: Http) {}


  ngOnInit() {
    $(document).ready(function() {
      console.log();
    });
  }


  getVerKey() {
    const headerss = new Headers({
      'Accept': 'text/plain'
    });
    return this.http.get('http://api.allerest.pl/doQueryAllSysStatus?countryId=1&webapiKey=495ecfc0', {headers: headerss});
  }
  onGet() {
    this.getVerKey().subscribe(
      (response) => {
        const keyArray = response.json();
        console.log(keyArray);
        var array = keyArray['sysCountryStatus']['item'][0]['verKey'];
        console.log(array);
      },
      (error) => console.log(error)
    );

   


    
  }
}
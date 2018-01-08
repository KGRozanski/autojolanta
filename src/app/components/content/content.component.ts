import { Component } from '@angular/core';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor() {

  }

  onSubmit() {
    console.log('dziala!');
    window.open('http://maps.google.com/maps?saddr=&daddr=autojolanta', '_blank');
  }

}

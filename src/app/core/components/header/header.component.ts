import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Menu } from '../../types/menu.type';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() items$ = new EventEmitter();
  
  items: Menu = [
    {label: 'Start', icon: 'pi pi-fw pi-home', scrollElement: 'start', command: (event) => this.scroll(event.item)},
    {label: 'O nas', icon: 'pi pi-fw pi-users', scrollElement: 'about', command: (event) => this.scroll(event.item)},
    {label: 'Usługi', icon: 'pi pi-fw pi-cog', scrollElement: 'services', command: (event) => this.scroll(event.item)},
    {label: 'Kontakt', icon: 'pi pi-fw pi-whatsapp', scrollElement: 'contact', command: (event) => this.scroll(event.item)},
  ];

  scroll(event: any) {
    animateScrollTo(document.querySelector('#'+event.scrollElement) as any);
  }

  ngOnInit(): void {
    this.items$.next(this.items);
  }
}

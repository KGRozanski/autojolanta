import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  items: Array<MenuItem & {scrollElement?: string}> = [
    {label: 'Start', icon: 'pi pi-fw pi-home', scrollElement: 'start'},
    {label: 'O nas', icon: 'pi pi-fw pi-users', scrollElement: 'about'},
    {label: 'Usługi', icon: 'pi pi-fw pi-cog', scrollElement: 'services'},
    {label: 'Kontakt', icon: 'pi pi-fw pi-whatsapp', scrollElement: 'contact'},
  ];

  scroll(event: any) {
    animateScrollTo(document.querySelector('#'+event.scrollElement) as any);
  }
}

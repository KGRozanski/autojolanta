import { Component } from '@angular/core';
import { Menu } from './core/types/menu.type';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'AutoJolanta';
    items: Menu = [];

    handleItems(event: Menu) {
        this.items = event;
    }
}

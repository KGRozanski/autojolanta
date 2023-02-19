import { Component } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    products = [
        {
            name: 'Wymiana filtrów',
            image: 'filtr.png',
        },
        {
            name: 'Klocki hamulcowe przód / tył',
            image: 'klocki.png',
        },
        {
            name: 'Szczęki hamulcowe tył',
            image: 'breaking shoes.png',
        },
        {
            name: 'Diagnostyka komputerowa',
            image: 'diagnostics.png',
        },
        {
            name: 'Wymiana oleju',
            image: 'oil.png',
        },

        {
            name: 'Wymiana rozrusznika',
            image: 'rozrusznik.png',
        },
        {
            name: 'Wymiana alternatora',
            image: 'alternator.png',
        },

        {
            name: 'Tarcze i klocki przód / tył',
            image: 'breaking_shield.png',
        },

        {
            name: 'Bębny i szczęki hamulcowe tył',
            image: 'drum.png',
        },
        {
            name: 'Wymiana układu zapłonowego żarowego',
            image: 'swieca.png',
        },
        {
            name: 'Wymiana sprzęgła',
            image: 'clutch.png',
        },
        {
            name: 'Lakierowanie za element',
            image: 'sprey.png',
        },
        {
            name: 'Wymiana rozrządu',
            image: 'rozrzad.png',
        },
        {
            name: 'Uszczelka pod głowicą',
            image: 'uszczelka.png'
        }
    ];
}

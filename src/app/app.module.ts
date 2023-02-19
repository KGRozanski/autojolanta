import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { AboutComponent } from './core/components/about/about.component';
import { ServicesComponent } from './core/components/services/services.component';
import { DirectionsComponent } from './core/components/directions/directions.component';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './core/components/footer/footer.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
    declarations: [AppComponent, HeaderComponent, AboutComponent, ServicesComponent, DirectionsComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, CarouselModule, ButtonModule, TabMenuModule ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

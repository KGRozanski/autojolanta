import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { MapComponent } from './components/map/map.component';

import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';
import { AllegroComponent } from './components/allegro/allegro.component';




@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MapComponent,
    AllegroComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCHUX5vXuJYzdHlwiVvYpUqc24uoE5B1o'
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCHUX5vXuJYzdHlwiVvYpUqc24uoE5B1o'
    }),
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

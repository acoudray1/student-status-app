import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { HeaderComponent } from './components/header/header.component';
import { GridComponent } from './components/grid/grid.component';
import { AdditionalInformationsComponent } from './components/additional-informations/additional-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCardComponent,
    HeaderComponent,
    GridComponent,
    AdditionalInformationsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [ DatePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

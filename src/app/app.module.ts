import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { HeaderComponent } from './components/header/header.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCardComponent,
    HeaderComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

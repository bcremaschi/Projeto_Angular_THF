import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThfModule } from '@totvs/thf-ui';
import { AuctionsModule } from './auctions/auctions.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    AuctionsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

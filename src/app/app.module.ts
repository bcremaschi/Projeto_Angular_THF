import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThfModule } from '@totvs/thf-ui';
import { LeiloesModule } from './leiloes/leiloes.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    LeiloesModule,
    HomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

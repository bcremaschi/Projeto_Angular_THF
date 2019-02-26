import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { LeiloesModule } from './leiloes/leiloes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    LeiloesModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

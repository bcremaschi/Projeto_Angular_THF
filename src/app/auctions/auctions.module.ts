import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThfPageModule, ThfTabsModule, ThfModule, ThfDynamicModule, ThfFieldModule, ThfMenuModule } from '@totvs/thf-ui';
import { ThfNotificationModule } from '@totvs/thf-ui/services/thf-notification';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';

import { HomeModule } from '../home/home.module';
import { MenuComponent } from './menu/menu.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';

@NgModule({
  declarations: [
    AddAuctionComponent,
    MenuComponent,
    MyAuctionsComponent
  ],
  imports: [
    ThfModule,
    ThfDynamicModule,
    ThfNotificationModule,
    ThfButtonModule,
    ThfPageModule,
    ThfTabsModule,
    ThfFieldModule,
    ThfMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ],
})

export class AuctionsModule {}

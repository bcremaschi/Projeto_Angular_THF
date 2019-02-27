import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ThfPageModule, ThfTabsModule, ThfModule, ThfDynamicModule, ThfFieldModule, ThfMenuModule } from '@totvs/thf-ui';
import { ThfNotificationModule } from '@totvs/thf-ui/services/thf-notification';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';

import { HomeModule } from '../home/home.module';
import { MenuComponent } from './menu/menu.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

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
    CurrencyMaskModule,
    HomeModule
  ],

  providers: [{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }]
})

export class AuctionsModule {}

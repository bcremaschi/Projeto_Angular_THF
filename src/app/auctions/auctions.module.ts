import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { ThfPageModule, ThfMenuModule } from '@totvs/thf-ui';

import { HomeModule } from '../home/home.module';
import { MenuComponent } from './menu/menu.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { SharedModule } from '../shared/shared.module';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};
@NgModule({
  declarations: [
    AddAuctionComponent,
    MenuComponent,
    MyAuctionsComponent
  ],
  imports: [
    CommonModule,
    ThfPageModule,
    ThfMenuModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    HomeModule,
    CoreModule,
    SharedModule
  ],

  providers: [{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }],
})

export class AuctionsModule {}

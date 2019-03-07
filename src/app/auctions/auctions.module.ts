import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { ThfPageModule, ThfMenuModule } from '@totvs/thf-ui';

import { HomeModule } from '../home/home.module';
import { MenuComponent } from './menu/menu.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { SharedModule } from '../shared/shared.module';
import { ActiveCardsComponent } from './my-auctions/active-cards/active-cards.component';
import { ModalComponent } from './my-auctions/modal/modal.component';
import { DraftCardComponent } from './my-auctions/draft-card/draft-card.component';

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
    MyAuctionsComponent,
    DraftCardComponent,
    ActiveCardsComponent,
    ModalComponent
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

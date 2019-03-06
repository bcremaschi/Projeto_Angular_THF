import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DraftCardComponent } from './components/draft-card/draft-card.component';
import { ActiveCardsComponent } from './components/active-cards/active-cards.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageComponent } from './components/vmessage/vmessage.component';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { CurrencyMaskModule } from 'ng2-currency-mask';

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
    DraftCardComponent,
    ActiveCardsComponent,
    ModalComponent,
    VmessageComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],

  exports: [
    DraftCardComponent,
    ActiveCardsComponent,
    ModalComponent,
    VmessageComponent
  ],

  providers: [{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }],
})

export class SharedModule {}

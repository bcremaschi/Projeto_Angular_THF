import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThfPageModule, ThfTabsModule, ThfModule, ThfDynamicModule } from '@totvs/thf-ui';
import { ThfNotificationModule } from '@totvs/thf-ui/services/thf-notification';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';

import { AddLeilaoComponent } from './add-leilao/add-leilao.component';

@NgModule({
  declarations: [
    AddLeilaoComponent
  ],
  imports: [
    ThfModule,
    ThfDynamicModule,
    ThfNotificationModule,
    ThfButtonModule,
    ThfPageModule,
    ThfTabsModule,
    FormsModule
  ],
  exports: [
    AddLeilaoComponent
  ]
})

export class LeiloesModule {}

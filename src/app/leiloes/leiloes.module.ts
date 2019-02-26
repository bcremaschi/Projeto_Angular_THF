import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThfPageModule, ThfTabsModule, ThfModule, ThfDynamicModule, ThfFieldModule } from '@totvs/thf-ui';
import { ThfNotificationModule } from '@totvs/thf-ui/services/thf-notification';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';

import { HomeModule } from './../home/home.module';

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
    ThfFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ],
  exports: [
    AddLeilaoComponent
  ]
})

export class LeiloesModule {}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThfPageModule, ThfTabsModule, ThfModule, ThfDynamicModule, ThfFieldModule, ThfMenuModule } from '@totvs/thf-ui';
import { ThfNotificationModule } from '@totvs/thf-ui/services/thf-notification';
import { ThfButtonModule } from '@totvs/thf-ui/components/thf-button';

import { HomeModule } from './../home/home.module';
import { MenuComponent } from './menu/menu.component';
import { AddLeilaoComponent } from './add-leilao/add-leilao.component';

@NgModule({
  declarations: [
    AddLeilaoComponent,
    MenuComponent
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

export class LeiloesModule {}

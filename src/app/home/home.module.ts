import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { ThfModule } from '@totvs/thf-ui';

import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ThfModule,
    ThfPageLoginModule,
    CoreModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class HomeModule {}

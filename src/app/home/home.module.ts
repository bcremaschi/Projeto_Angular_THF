import { CoreModule } from './../core/core.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { ReactiveFormsModule } from '@angular/forms';
import { ThfModule } from '@totvs/thf-ui';

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
    CoreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class HomeModule {}

import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { ReactiveFormsModule } from '@angular/forms';
import { ThfModule } from '@totvs/thf-ui';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    MenuComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ThfModule,
    ThfPageLoginModule
  ],

  exports: [
    MenuComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class HomeModule {}

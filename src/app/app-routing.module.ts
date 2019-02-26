import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './home/login-page/login-page.component';
import { AddLeilaoComponent } from './leiloes/add-leilao/add-leilao.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'add-leilao', component: AddLeilaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

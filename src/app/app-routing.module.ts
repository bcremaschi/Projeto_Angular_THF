import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './home/login-page/login-page.component';
import { MyAuctionsComponent } from './auctions/my-auctions/my-auctions.component';
import { AddAuctionComponent } from './auctions/add-auction/add-auction.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'my-auctions-page', component: MyAuctionsComponent },
  { path: 'add-auction-page/my-auctions-page', component: MyAuctionsComponent },
  { path: 'my-auctions-page/add-auction-page', component: AddAuctionComponent },
  { path: 'add-auction-page', component: AddAuctionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

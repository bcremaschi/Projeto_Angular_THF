import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './home/login-page/login-page.component';
import { MyAuctionsComponent } from './auctions/my-auctions/my-auctions.component';
import { AddAuctionComponent } from './auctions/add-auction/add-auction.component';
import { MyAuctionsResolver } from './auctions/my-auctions/my-auctions.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-auctions-page',
    component: MyAuctionsComponent,
    resolve: {
      auctions: MyAuctionsResolver
    }
  },
  {
    path: 'add-auction-page',
    component: AddAuctionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

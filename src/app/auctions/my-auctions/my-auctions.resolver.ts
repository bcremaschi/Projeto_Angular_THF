import { AuthService } from 'src/app/core/auth/auth.service';
import { DraftAuctionsServer } from './draft-card/draft-auctions.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewDraftAuctions } from './draft-card/new-draft-autions';
import { TokenService } from 'src/app/core/token/token.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class MyAuctionsResolver implements Resolve<Observable<NewDraftAuctions[]>> {

  constructor(public draftAuctionServer: DraftAuctionsServer,
              public tokenService: TokenService,
              public authService: AuthService) {}

  resolve(): Observable<NewDraftAuctions[]> {

    console.log(this.tokenService.getToken('access_token'));

    this.authService.refresh()
      .subscribe(() => {
        console.log('Refresh realizado com sucesso!');
      },
      err => console.log(err)
    );

    console.log(this.tokenService.getToken('access_token'));

    return this.draftAuctionServer
      .getAuctions(this.tokenService.getToken('access_token'));
  }
}

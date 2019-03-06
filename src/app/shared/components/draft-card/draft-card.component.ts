import { Component, OnInit } from '@angular/core';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { MyAuctionsServer } from 'src/app/shared/components/draft-card/draft-auctions.service';
import { TokenService } from 'src/app/core/token/token.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { NewDraftAuctions } from './new-draft-autions';

@Component({
  selector: 'app-draft-card',
  templateUrl: './draft-card.component.html',
  styleUrls: ['./draft-card.component.css']
})

export class DraftCardComponent implements OnInit {

  auctions: NewDraftAuctions[] = [];

  constructor(private myAuctionsService: MyAuctionsServer,
              private tokenService: TokenService,
              private authService: AuthService,
              private thfNotification: ThfNotificationService ) { }

  ngOnInit() {
    this.getAuctions();
  }

  private getAuctions() {
    // Realiza o refresh do token de acesso na requisição.
    this.authService.refresh()
      .subscribe(() => {
        console.log('Refresh realizado com sucesso!')
      },
      err => console.log(err)
    );

    this.myAuctionsService.getAuctions(this.tokenService.getToken('access_token'))
      .subscribe(auctions => {
        this.auctions = auctions;
      },
        err => this.thfNotification.error(err)
      );
  }

  putAuctions() {}

  deleteAuctions() {}

}

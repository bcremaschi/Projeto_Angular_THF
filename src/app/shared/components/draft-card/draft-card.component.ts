import { Component, OnInit } from '@angular/core';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { MyAuctionsServer } from 'src/app/shared/components/draft-card/draft-auctions.service';
import { TokenService } from 'src/app/core/token/token.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-draft-card',
  templateUrl: './draft-card.component.html',
  styleUrls: ['./draft-card.component.css']
})

export class DraftCardComponent implements OnInit {

  constructor(private myAuctionsService: MyAuctionsServer,
              private tokenService: TokenService,
              private authService: AuthService,
              private thfNotification: ThfNotificationService ) { }

  ngOnInit() {
    this.getAuctions();
  }

  private getAuctions() {
    //Realiza o refresh do token de acesso na requisi��o.
    this.authService.refresh()
      .subscribe(() => {
        console.log('Refresh realizado com sucesso!')
      },
      err => console.log(err)
    );

    this.myAuctionsService.getAuctions(this.tokenService.getToken('access_token'))
      .subscribe(() => {
        console.log('Leilões carregados com sucesso.');
        },
        err => this.thfNotification.error(err)
      );
  }

  putAuctions() {}

  deleteAuctions() {}

}

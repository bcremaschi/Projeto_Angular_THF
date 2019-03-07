import { Component, OnInit, Input } from '@angular/core';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { TokenService } from 'src/app/core/token/token.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { NewDraftAuctions } from './new-draft-autions';
import { DraftAuctionsServer } from './draft-auctions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-draft-card',
  templateUrl: './draft-card.component.html',
  styleUrls: ['./draft-card.component.css']
})

export class DraftCardComponent implements OnInit {

  @Input() name: string = '';
  @Input() photo: string = '';
  @Input() base_price: number = 0;
  @Input() owner: string = '';
  @Input() auctions: NewDraftAuctions[] = [];

  constructor(private myAuctionsService: DraftAuctionsServer,
              private tokenService: TokenService,
              private authService: AuthService,
              private thfNotification: ThfNotificationService,
              private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.auctions = this.activatedRoute.snapshot.data['auctions'];

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

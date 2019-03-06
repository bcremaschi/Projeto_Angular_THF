
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { AddAuctionService } from './add-auction.service';
import { NewAuction } from './new-auction';
import { TokenService } from 'src/app/core/token/token.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-auction-page',
  templateUrl: './add-auction.component.html'
})
export class AddAuctionComponent implements OnInit {
  addAuctionForm: FormGroup;
  photo: File;
  base64textString: string = '';
  newAuction: NewAuction;

  constructor(private formBuilder: FormBuilder,
              private thfNotification: ThfNotificationService,
              private addAuctionService: AddAuctionService,
              private router: Router,
              private tokenService: TokenService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.addAuctionForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      base_price: [0.00,
        [
          Validators.required,
          Validators.nullValidator
        ]
      ],
      bid_type: ['1',
        [
          Validators.required
        ]
      ],
      photo: [''],
    });
  }

  private addAuction() {
    this.newAuction = this.addAuctionForm.getRawValue();
    //Transforma a foto selecionada em base64.
    this.setBase64File(this.photo);

    //Realiza o refresh do token de acesso na requisi��o.
    this.authService.refresh()
      .subscribe(() => {
        console.log('Refresh realizado com sucesso!')
      },
      err => this.thfNotification.error(err)
    );

    //Realiza o post para inclus�o de um novo leil�o.

    this.addAuctionService
      .addAuction(this.newAuction, this.tokenService.getToken('access_token'))
      .subscribe(() => {
        this.thfNotification.success('Leilão criado com sucesso!');
        this.addAuctionForm.reset();
      },
      err => this.thfNotification.error(err)
    );
  }

  //Transforma a foto recebida em base64
  setBase64File(file): string {
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
    return '';
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);

    this.newAuction.photo = this.base64textString;
}

}

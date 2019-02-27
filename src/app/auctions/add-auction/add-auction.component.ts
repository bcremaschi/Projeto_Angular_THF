import { Component, OnInit } from '@angular/core';
import { AddAuctionService } from './add-auction.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ThfUploadFile } from '@totvs/thf-ui/components/thf-field/thf-upload/thf-upload-file';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfComboOption } from '@totvs/thf-ui';
import { NewAuction } from './new-auction';

@Component({
  selector: 'add-auction-page',
  templateUrl: './add-auction.component.html'
})
export class AddAuctionComponent implements OnInit {
  addAuctionForm: FormGroup;

  types_bid: Array<ThfComboOption>;
  photo: ThfUploadFile;

  constructor(private formBuilder: FormBuilder,
              private thfNotification: ThfNotificationService,
              private addLeilaoService: AddAuctionService,
              private router: Router) { }

  ngOnInit(): void {
    this.types_bid = this.getTypes();

    this.addAuctionForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      base_price: [0,
        [
          Validators.required,
          Validators.nullValidator
        ]
      ],
      photo: [''],
      bid_type: ['1',
        [
          Validators.required
        ]
      ]
    });
  }

  private getTypes(): Array<ThfComboOption> {
    return [
      { label: 'Lance fixo', value: 'bid_fix' },
      { label: 'Lance livre', value: 'bid_free' }
    ];
  }

  private upload(event: ThfUploadFile) {
    this.photo = event.file;

    console.log(this.photo);
  }

  private addAuction() {
    const newAuction = this.addAuctionForm.getRawValue() as NewAuction;

    console.log(newAuction);

    this.addLeilaoService
      .addAuction(newAuction)
      .subscribe(() => {
        this.thfNotification.success('Data saved successfully!');
        this.addAuctionForm.reset();
      },
      err => console.log(err)
    );
  }

}

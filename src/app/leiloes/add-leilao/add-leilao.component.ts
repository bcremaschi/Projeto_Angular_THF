import { Component, OnInit } from '@angular/core';
import { AddLeilaoService } from './add-leilao.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ThfUploadFile } from '@totvs/thf-ui/components/thf-field/thf-upload/thf-upload-file';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import {  ThfComboOption } from '@totvs/thf-ui';
import { NewLeilao } from './new-leilao';

@Component({
  selector: 'add-leilao-page',
  templateUrl: './add-leilao.component.html'
})
export class AddLeilaoComponent implements OnInit {
  addLeilaoForm: FormGroup;

  types_bid: Array<ThfComboOption>;
  photo: ThfUploadFile;

  constructor(private formBuilder: FormBuilder,
              private thfNotification: ThfNotificationService,
              private addLeilaoService: AddLeilaoService,
              private router: Router) { }

  ngOnInit(): void {
    this.types_bid = this.getTypes();

    this.addLeilaoForm = this.formBuilder.group({
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

  private addLeilao() {
    const newLeilao = this.addLeilaoForm.getRawValue() as NewLeilao;

    console.log(newLeilao);

    this.addLeilaoService
      .addLeilao(newLeilao)
      .subscribe(() => {
        this.thfNotification.success('Data saved successfully!');
        this.addLeilaoForm.reset();
      },
      err => console.log(err)
    );
  }

}

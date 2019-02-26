import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  ThfComboOption } from '@totvs/thf-ui';
import { AddLeilaoService } from './add-leilao.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewLeilao } from './new-leilao';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui/components/thf-modal';
import { ThfUploadFile } from '@totvs/thf-ui/components/thf-field/thf-upload/thf-upload-file';

@Component({
  selector: 'add-leilao-page',
  templateUrl: './add-leilao.component.html'
})
export class AddLeilaoComponent implements OnInit {
  addLeilaoForm: FormGroup;

  types_bid: Array<ThfComboOption>;
  photo: ThfUploadFile;

  //@ViewChild('dynamicForm') form: NgForm;

  /*
  person = {};
  fields: Array<ThfDynamicFormField> = [
    { property: 'name', label: 'Produto:', required: true, type:'string', minLength: 4, maxLength: 50, gridColumns: 6, gridSmColumns: 12 },
    { property: 'base_price', label: 'Preço Base:', required: true, type: 'currency', gridColumns: 6 },
    { property: 'photo', type:'string', label: 'Foto:', required: false, gridColumns: 6 },
    { property: 'bid_type', label: 'Formato do Lance:', required: true, gridColumns: 6, options: [
      { label: 'Lance fixo', value: 1 },
      { label: 'Lance livre', value: 2 },
    ]},
    { property: 'bid_step', label: 'Valor do Lance:', required: true, disabled:true, type: 'currency', gridColumns: 6 },
  ];
  */
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

  }

  private addLeilao() {
    const newLeilao = this.addLeilaoForm.getRawValue() as NewLeilao;

    console.log(newLeilao);

    this.addLeilaoService
      .addLeilao(newLeilao)
      .subscribe(() => {
        this.thfNotification.success('Data saved successfully!');
        this.form.reset();
      },
      err => console.log(err)
    );
  }

}

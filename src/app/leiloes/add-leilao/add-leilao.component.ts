import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfDynamicFormField, ThfSelectOption } from '@totvs/thf-ui';
import { AddLeilaoService } from './add-leilao.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewLeilao } from './new-leilao';


@Component({
  selector: 'add-leilao-page',
  templateUrl: './add-leilao.component.html'
})
export class AddLeilaoComponent implements OnInit {

  @ViewChild('dynamicForm') form: NgForm;

  name: string;
  base_price: number;
  photo: string;
  bid_type: Array<ThfSelectOption>;
  bid_step: number;

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

  constructor(private thfNotification: ThfNotificationService,
              private router: Router,
              private addLeilaoService: AddLeilaoService) { }

  ngOnInit() {

  }

  addLeilao() {
    const newLeilao = this.form.getRawValue() as NewLeilao;

    this.addLeilaoService
      .addLeilao(newLeilao)
      .subscribe(() => this.thfNotification.success('Data saved successfully!'),
      err => console.log(err)
    );
  }

}

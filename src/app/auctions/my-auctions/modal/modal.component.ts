import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  formBidValue: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formBidValue = this.formBuilder.group({
      bid_value: [0.00,
        [
          Validators.required,
          Validators.nullValidator
        ]
      ]
    });
  }

  addBidValue() {
    this.formBidValue.reset();
  }
}

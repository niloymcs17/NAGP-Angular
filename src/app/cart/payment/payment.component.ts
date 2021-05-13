import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('' , Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required)
    })
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  findError(value: string): string {
    if (this.profileForm.get(value)?.hasError) {
      return "Input is required!";
    } else {
      return '';
    }
  }

}

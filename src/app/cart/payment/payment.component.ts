import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required)
    })
  });

  totalPrice = 0;
  order = ''
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.router.getCurrentNavigation()?.extras);
    this.route.queryParams.subscribe(params => {
      console.log("ROute param" , params);
      this.totalPrice = params['total'] || 0;
      this.order = params['orderID'] || '';
      if (this.totalPrice == 0 || this.order == '') {
        // this.router.navigate(['/cart']);
      }
    });
  }

  findError(value: string): string {
    if (this.profileForm.get(value)?.hasError) {
      return "Input is required!";
    } else {
      return '';
    }
  }

}

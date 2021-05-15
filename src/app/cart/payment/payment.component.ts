import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    phone: new FormControl('', [ Validators.required, Validators.pattern("[0-9 ]{10}")]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pin: new FormControl('', [ Validators.required, Validators.pattern("[0-9 ]{6}")])
    })
  });

  totalPrice = 0;
  order = ''
  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService ) { }

  ngOnInit(): void {
   const params = this.route.snapshot.params ;
      this.totalPrice = params['total'] || 0;
      this.order = params['orderID'] || '';
      if (this.totalPrice == 0 || this.order == '') {
        this.router.navigate(['/cart']);
      }
  }

  findError(value: string): string {
    const feild = this.profileForm.get(value);
    if (feild?.hasError) {
      if(feild.errors?.email){
        return this.translate.instant('ERROR.email');
      } else if (feild.errors?.pattern) {
        return value == 'phone' ? this.translate.instant('ERROR.phone') : this.translate.instant('ERROR.pin');
      } else {
        return this.translate.instant('ERROR.required');
      }
    } else {
      return '';
    }
  }

  orderPlace(){
    
  }

}

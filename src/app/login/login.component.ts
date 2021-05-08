import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required],
  });

  constructor(private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    if(this.profileForm.valid) {
        this.router.navigate(['/product']);
    }
    console.log("Login form validity",this.profileForm.valid);
  }

  findError(value: string): string {
    if (this.profileForm.get(value)?.hasError) {
      return "Input is required!";
    } else {
      return '';
    }
  }
}

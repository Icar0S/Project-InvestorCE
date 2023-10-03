import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({

    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  hasUnitNumber = false;



  onSubmit(): void {
    alert('Thanks!');
  }
}

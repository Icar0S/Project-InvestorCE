import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  user: User = new User();
  addressForm: any
  email: any;
  constructor(private fb: FormBuilder) {
    console.log('entrou')
    console.log(this.user);
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }
    console.log(this.user);
    this.addressForm = this.fb.group({
      id: this.user.id,
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      phone: [this.user.phone, Validators.required],
      password: [this.user.password, Validators.required],
    });
    this.email = this.addressForm.controls['email'];

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email é Obrigatório';
    }
    return this.email.hasError('email') ? 'Email invalido' : '';
  }

  onSubmit(): void {
    this.user.id = '1';
    if (this.addressForm.controls['name'].value)
      this.user.name = this.addressForm.controls['name'].value;
    if (this.addressForm.controls['email'].value)
      this.user.email = this.addressForm.controls['email'].value;
    if (this.addressForm.controls['phone'].value)
      this.user.phone = this.addressForm.controls['phone'].value;
    if (this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;
    if (this.addressForm.controls['cpf'].value)
      this.user.cpf = this.addressForm.controls['cpf'].value;

    alert('Você cadastrou');
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/custom-validators/password-match.validator';
import { passwordValidator } from 'src/app/custom-validators/password.validator';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.builder.group({
    username: ['', [Validators.required]], 
    // primo valore è iniziale
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    dob: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]],
    passwordConfirm: ['', [Validators.required, passwordValidator]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    cardnumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
  }, {validators: passwordMatch})

  constructor( private builder: FormBuilder, private userS: UserService) { }

  ngOnInit(): void {
  }

  register(){ 
    // potrei ricreare form pulito(metodo giusto)
    const user = this.registerForm.value; 
    delete user.passwordConfirm;
    console.log(user);
    // .value costruisce oggetto, con nome campo, e form
    this.userS.register(this.registerForm.value) 
    // passo a userservie il value della form
  }

  nowForInput(): string {
    return new Date().toISOString().split('T')[0];
  }

}

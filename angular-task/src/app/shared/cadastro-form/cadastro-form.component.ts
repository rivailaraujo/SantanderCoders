import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { User } from 'src/app/models/user.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  hide: boolean = true;
  cadastroData: User | undefined
  cadastroForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.cadastroData = this.cadastroForm.value;
    if (this.cadastroData) this.userService.createUser(this.cadastroData)
  }

}

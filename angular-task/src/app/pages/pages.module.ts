import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './../shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';



@NgModule({
  declarations: [
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    CreateTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class PagesModule { }

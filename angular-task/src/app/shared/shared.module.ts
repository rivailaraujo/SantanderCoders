import { DirectivesModule } from './../directives/directives.module';
import { SnackBarComponent } from './create-task-form/snack-bar/snack-bar.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { TableComponent } from './list/table/table.component';
import { DialogComponent } from './list/dialog/dialog.component';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ListComponent,
    CadastroFormComponent,
    LoginFormComponent,
    TableComponent,
    DialogComponent,
    CreateTaskFormComponent,
    SnackBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    ListComponent,
    CadastroFormComponent,
    LoginFormComponent,
    DialogComponent,
    CreateTaskFormComponent,
    SnackBarComponent,
    HeaderComponent
  ],
  providers: [DatePipe]
})
export class SharedModule { }

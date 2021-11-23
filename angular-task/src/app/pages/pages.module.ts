import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './../shared/shared.module';
import { CadastroPipe } from './cadastro.pipe';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    HomeComponent,
    CadastroPipe,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }

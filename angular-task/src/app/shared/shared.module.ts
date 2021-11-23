import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDataExampleDialog, ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    ListComponent,
    DialogDataExampleDialog
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListComponent,
    DialogDataExampleDialog
  ]
})
export class SharedModule { }

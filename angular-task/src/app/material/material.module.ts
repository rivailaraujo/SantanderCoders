import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }

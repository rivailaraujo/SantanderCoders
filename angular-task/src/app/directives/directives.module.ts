import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtomColorDirective } from './buttom-color.directive';



@NgModule({
  declarations: [
    ButtomColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtomColorDirective
  ]

})
export class DirectivesModule { }

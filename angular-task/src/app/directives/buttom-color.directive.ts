import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appButtomColor]'
})
export class ButtomColorDirective {
  @Input() backgroudColor: string = 'white';
  @Input() textColor: string = 'black';

  constructor(private _elemento: ElementRef) { }

  public ngOnInit() {
    this.changeColor();
  }

  private changeColor(color: string = 'white') {
    this._elemento.nativeElement.style.backgroundColor = this.backgroudColor || color;
    this._elemento.nativeElement.style.color = this.textColor;
  }
}

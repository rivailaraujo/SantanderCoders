import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-list-task',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public task?: Task;
  constructor(public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

}

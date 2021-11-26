import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from '../../../models/task.model';
import { DialogComponent } from '../dialog/dialog.component';
import { TasksService } from './../../../services/tasks.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'prioridade', 'feita', 'acoes'];
  @Input() data?: Array<Task>;
  @Output() alteredDeleteTask = new EventEmitter<Boolean>();
  @Output() alteredDoneTask = new EventEmitter<Boolean>();
  dataSource: any;

  constructor(public dialog: MatDialog, private taskService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = this.data;
  }
  getColor(e: string) {
    if (e === 'High') {
      return 'red';
    } else if (e === 'Medium') {
      return 'orange'
    }
    return 'green'
  }

  openDialog(e: Task) {
    this.dialog.open(DialogComponent).componentInstance.task = e;
  }

  deleteTask(e: Task) {
    this.taskService.deleteTask(e.id)
      .subscribe(data => {
        console.log('apagou')
        this.alteredDeleteTask.emit(true);
      }, error => {
        console.log('não apagou')
      })
  }

  setDone(e: Task) {
    this.taskService.setDoneTask(e.id, !e.done)
      .subscribe(data => {
        console.log('atualizou')
      }, error => {
        console.log('não apagou')
      })
  }

  updateTask(e: Task) {
    this.taskService.setCurrentTask(e);
    this.router.navigate(['/edit']);
  }

}

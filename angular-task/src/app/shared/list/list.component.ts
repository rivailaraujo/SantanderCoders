import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TasksService } from './../../services/tasks.service';
import { Observable } from 'rxjs';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-list-task',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() userID?: string;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  tasks?: Array<Task>
  tasks$?: Observable<Array<Task>>;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }


  getTasks() {
    console.log('entrou')
    if (this.userID) {
      this.tasks$ = this.taskService.getTaskUser(this.userID);
    }

    // if (this.userID) {
    //   this.taskService.getTaskUser(this.userID)
    //     .subscribe(
    //       data => {
    //         this.tasks = data;
    //         console.log(this.tasks)
    //       }
    //     )
    // }
  }
  refreshList() {
    this.getTasks();
  }
}


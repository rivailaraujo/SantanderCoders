import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  data: any
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.data = this.taskService.getCurrentTask();
    console.log(this.data)
  }

}

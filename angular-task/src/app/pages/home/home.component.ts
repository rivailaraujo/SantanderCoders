import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [{}];
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.data = this.tasksService.task;
    console.log(this.data)
  }


}

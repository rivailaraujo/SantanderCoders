import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TasksService } from './../../services/tasks.service';
import { UserService } from './../../services/user.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css'],
})
export class CreateTaskFormComponent implements OnInit {
  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    dueData: new FormControl(''),
    priority: new FormControl('', [Validators.required]),
  });

  @Input() edit: boolean = false;
  @Input() data: Task | undefined;

  prioritys: string[] = ['High', 'Medium', 'Low'];
  constructor(
    private taskService: TasksService,
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data)
      this.taskForm.controls.name.setValue(this.data.name);
      this.taskForm.controls.description.setValue(this.data.description);
      this.taskForm.controls.dueData.setValue(this.data.dueData);
      this.taskForm.controls.priority.setValue(this.data.priority);
    }
  }
  toCreateTask() {
    if (this.edit && this.data) {
      this.taskService.editTask(this.taskForm.value, this.data.id, this.userService.getCurrentUser()?.id)
        .subscribe({
          next: (data) => {
            this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 2 * 1000,
              data: {
                text: 'Tarefa atualizada!',
                msg: 'success',
              },
            });
            this.router.navigate(['']);
          },
          error: (error) => {
            this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 2 * 1000,
              data: {
                text: 'Erro, Tarefa não atualizada!',
                msg: 'error',
              },
            });
          },
        });

    } else {
      this.taskService
        .postTask(this.taskForm.value, this.userService.getCurrentUser()?.id)
        .subscribe({
          next: (data) => {
            this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 2 * 1000,
              data: {
                text: 'Tarefa criada!',
                msg: 'success',
              },
            });
            this.router.navigate(['']);
          },
          error: (error) => {
            this._snackBar.openFromComponent(SnackBarComponent, {
              duration: 2 * 1000,
              data: {
                text: 'Erro, Tarefa não criada!',
                msg: 'error',
              },
            });
          },
        });
    }

  }
}

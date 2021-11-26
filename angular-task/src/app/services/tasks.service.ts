import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private readonly API = environment.API;
  private currentTask: Task | undefined
  constructor(private http: HttpClient) { }

  getTaskUser(id: string) {
    let parameters = new HttpParams();
    parameters = parameters.append('user_id', id);

    return this.http.get(this.API + '/tasks', { params: parameters }).pipe(
      tap(console.log)
    )
  }

  postTask(task: Task, id?: string) {
    task.id = uuidv4();
    task.done = false;
    if (id) task.user_id = id;
    return this.http.post<Task>(this.API + '/tasks', task).
      pipe()
  }

  deleteTask(taskId: string) {
    return this.http.delete(this.API + '/tasks/' + taskId).
      pipe()
  }

  setDoneTask(taskId: string, done: boolean) {
    return this.http.patch(this.API + '/tasks/' + taskId, { done: done }).
      pipe()
  }

  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  getCurrentTask() {
    return this.currentTask;
  }

  editTask(task: Task, taskId: string, id?: string) {
    if (id) {
      task.user_id = id;
    }
    return this.http.put(this.API + '/tasks/' + taskId, task).
      pipe()
  }
}

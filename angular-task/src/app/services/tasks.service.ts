import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  task = [
    {
      'name': 'comprar pc'
    },
    {
      'name': 'comprar notebook'
    }
  ]
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../services/tasks.service';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userID: string = this.AuthService.userId;
  data: User | undefined
  constructor(private tasksService: TasksService, private AuthService: AuthService, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUser(this.userID).subscribe(
      success => {
        this.data = success;
        console.log(this.data)
      },
      error => {
        console.log('erro trazer usuario')
      }
    )
  }


}

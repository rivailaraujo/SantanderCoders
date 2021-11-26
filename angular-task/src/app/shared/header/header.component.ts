import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  getRouter() {
    console.log(this.router.url);
  }

  getAuth() {
    return this.authService.authenticated;
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}

import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {


  isLoggedIn = false;

  constructor(private userService: UserServiceClient, private router: Router) {
  }

  logout = () =>
    this.userService.logout()
      .then(() => this.router.navigate(['login']))

  ngOnInit() {
    this.userService.authenticate()
      .then(response => {
        this.isLoggedIn = response.username !== undefined && response.username !== '';
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {


  isLoggedIn = false;


  constructor(private service: UserServiceClient, private router: Router) {
  }

  logout() {
    this.service.logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service.authenticate()
      .then(response => {
        this.isLoggedIn = response.username !== undefined && response.username !== '';
      });
  }
}

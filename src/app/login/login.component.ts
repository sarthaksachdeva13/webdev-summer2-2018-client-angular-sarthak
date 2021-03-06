import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  login = (username, password) => this.userService
    .login(username, password)
    .then(user => this.router.navigate(['profile']), () => alert('Not found!'))


  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) {
  }

  id;
  isAdmin;
  username;
  password;
  firstName;
  lastName;
  address;
  email;
  phone;

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  sections = [];

  validateField(field) {
    return field !== undefined && field !== '';
  }

  validateProfileForm(user) {
    const {username} = user;
    const {email} = user;
    const {phone} = user;
    const {firstName} = user;
    const {lastName} = user;
    const {address} = user;
    return this.validateField(username) &&
      this.validateField(email) &&
      this.validateField(firstName) &&
      this.validateField(lastName) &&
      this.validateField(phone) &&
      this.validateField(address);
  }

  update() {
    this.user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: this.phone,
      email: this.email
    };

    if (this.validateProfileForm(this.user)) {
      this.userService.updateUser(this.user)
        .then(
          (user) => {
            alert('Updated successfully');
            console.log({user});
          }
        )
      ;
    }
  }


  logout = () => this.userService.logout()
    .then(() => this.router.navigate(['login']))


  ngOnInit() {
    this
      .userService.profile()
      .then(users => {
        const user = users[0];
        console.log(user);
        if (this.validateProfileForm(user)) {
          this.username = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.address = user.address;
          this.phone = user.phone;
          this.email = user.email;
        }
        this.username = user.username;
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections);

    this.userService.authenticate()
      .then(response => {
        this.isAdmin = response.username !== undefined && response.username === 'admin';
      });
  }

}

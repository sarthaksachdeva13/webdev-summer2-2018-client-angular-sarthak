import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private courseService: CourseServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.loadCourse(params['courseId']));
  }

  course: Course = new Course();

  loadCourse(courseId) {
    this.courseService.findCourseById(courseId)
      .then(course => this.course = course);
  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  ngOnInit() {
  }

}

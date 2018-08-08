import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allCourses: Course[] = [];
  selectedCourse = new Course();
  sections = [];
  courseId = -1;
  sectionId;
  sectionName;
  seats;
  selectedSection = {};

  constructor(private courseService: CourseServiceClient,
              private sectionsService: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router) {
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this.sectionsService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections)
      .then(() => this.courseService.findCourseById(courseId))
      .then(course => {
        this.selectedCourse = course;
      });
  }

  selectSection(section) {
    this.selectedSection = section;
    this.sectionName = section.name;
    this.seats = section.seats;
    this.sectionId = section._id;
  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  createSection() {
    if (this.courseId !== -1) {
      let selectedCourse = new Course();
      this.allCourses.map(course => {
        if (course.id === this.courseId) {
          selectedCourse = course;
        }
      });
      if (selectedCourse !== undefined) {
        const sectionName = selectedCourse.title + ' Section 1';
        const seats = 20;
        this
          .sectionsService
          .createSection(this.courseId, sectionName, seats)
          .then(() => {
            this.loadSections(this.courseId);
          });
      }
    } else {
      alert('Please select a course first');
    }
  }

  deleteSection() {
    this.sectionsService.deleteSection(this.sectionId)
      .then(response => {
        console.log(response);
        if (response.ok) {
          alert('Deleted');
        }
      }).then(() => this.loadSections(this.courseId));
  }

  updateSection(sectionName, seats) {
    const section = {
      courseId: this.courseId,
      name: sectionName,
      seats: seats,
    };
    this.sectionsService.updateSection(section, this.sectionId, this.courseId)
      .then(section => {
        this.sectionName = section.name;
        this.seats = section.seats;
        this.loadSections(this.courseId);
      });
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.allCourses = courses);
  }
}

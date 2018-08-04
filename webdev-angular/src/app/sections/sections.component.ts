import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses = [];
  selectedCourse = {
    id: -1
  };
  section = {};

  constructor(private sectionService: SectionServiceClient, private courseService: CourseServiceClient) {
  }

  selectCourse = course =>
    this.selectedCourse = course

  addSection = section => {
    console.log(section);
    section.courseId = this.selectedCourse.id;
    this.sectionService.createSection(section);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}

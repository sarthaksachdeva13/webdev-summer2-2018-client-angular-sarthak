import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {


  findAllCourses = () =>
    fetch('https://sarthakwebdev.herokuapp.com/api/course')
      .then(response => response.json())


  findCourseById = courseId =>
    fetch('https://sarthakwebdev.herokuapp.com/api/course' + '/' + courseId)
      .then(response => response.json())


  findAllModulesForCourses = (courseId) =>
    fetch('https://sarthakwebdev.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json())


  findEnrolledCoursesForStudent(courseIds) {
    return fetch('https://sarthakwebdev.herokuapp.com/api/courses', {
      method: 'POST',
      body: JSON.stringify(courseIds),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => (response.json()));
  }
}

import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {


  findAllCourses() {
    return fetch('http://localhost:8080/api/course')
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch('http://localhost:8080/api/course' + '/' + courseId)
      .then(response => response.json());
  }

  authenticate = () =>
    fetch('http://localhost:3000/api/user/auth', {
      credentials: 'include'
    }).then(response => (response.json()))


  findAllModulesForCourses = (courseId) =>
    fetch('http://localhost:8080/api/course/' + courseId + '/module')
      .then(response => response.json())

  findEnrolledCoursesForStudent(courseIds) {
    return fetch('http://localhost:8080/api/courses', {
      method: 'POST',
      body: JSON.stringify(courseIds),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => (response.json()));
  }
}

import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
      method: 'put',
      credentials: 'include'
    })

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json())


  findSectionsForCourse = courseId =>
    fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json())


  findSectionsForStudent = () =>
    fetch('http://localhost:3000/api/student/section', {
      credentials: 'include'
    }).then(response => response.json())


  createSection = (courseId, name, seats) => {
    const section = {courseId, name, seats, availableSeats: seats};
    return fetch('http://localhost:3000/api/course/CID/section'.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection = sectionId =>
    fetch('http://localhost:3000/api/section/SID/delete'.replace('SID', sectionId), {
      method: 'DELETE',
      credentials: 'include'
    })

  updateSection = (section, sectionId, courseId) => {
    const url = 'http://localhost:3000/api/course/' + courseId + '/section/SID/update';
    return fetch(url.replace('SID', sectionId), {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response => response.json()));
  }

  enrollStudentInSection = (sectionId) =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enrollment', {
      method: 'post',
      credentials: 'include'
    })

  deEnroll = (sectionId) =>
    fetch('http://localhost:4000/api/section/' + sectionId + '/deRegister', {
      method: 'DELETE',
      credentials: 'include',
    })

}

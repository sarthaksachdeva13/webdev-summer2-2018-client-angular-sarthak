import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {


  deEnroll = sectionId =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/section/' + sectionId + '/deRegister', {
      method: 'DELETE',
      credentials: 'include',
    })


  enrollStudentInSection = sectionId =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/section/' + sectionId + '/enrollment', {
      method: 'post',
      credentials: 'include'
    })

  findAllSections = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/section')
      .then(response => response.json())


  findSectionsForCourse = courseId =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/course/' + courseId + '/section')
      .then(response => response.json())


  findSectionsForStudent = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/student/section', {
      credentials: 'include'
    }).then(response => response.json())


  createSection = (courseId, name, seats) => {
    const section = {courseId, name, seats, availableSeats: seats};
    return fetch('https://sarthakwebdevnode.herokuapp.com/api/course/CID/section'.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection = sectionId =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/section/SID/delete'.replace('SID', sectionId), {
      method: 'DELETE',
      credentials: 'include'
    })

  updateSection = (section, sectionId, courseId) => {
    const url = 'https://sarthakwebdevnode.herokuapp.com/api/course/' + courseId + '/section/SID/update';
    return fetch(url.replace('SID', sectionId), {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response => response.json()));
  }

}

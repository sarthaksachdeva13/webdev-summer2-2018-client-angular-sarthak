import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {

  findLessonsForModule = (courseId, moduleId) =>
    fetch('https://sarthakwebdev.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json())

}

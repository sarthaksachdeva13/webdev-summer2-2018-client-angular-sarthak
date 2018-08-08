import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {

  findLessonsForModule = (courseId, moduleId) =>
    fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json())

}

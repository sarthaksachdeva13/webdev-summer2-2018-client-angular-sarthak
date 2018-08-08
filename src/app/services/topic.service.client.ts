import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {

  findAllTopicsForLesson = (courseId, moduleId, lessonId) =>
    fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic/')
      .then(response => response.json())

}

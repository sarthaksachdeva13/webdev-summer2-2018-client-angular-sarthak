import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {

  findAllTopicsForLesson = (courseId, moduleId, lessonId) =>
    fetch('https://sarthakwebdev.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic/')
      .then(response => response.json())

}

import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {

  findModulesForCourse = courseId =>
    fetch('https://sarthakwebdev.herokuapp.com/api/course/CID/module'.replace('CID', courseId))
      .then(response => response.json())
}

import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {

  findModulesForCourse = courseId =>
    fetch('http://localhost:8080/api/course/CID/module'.replace('CID', courseId))
      .then(response => response.json())
}

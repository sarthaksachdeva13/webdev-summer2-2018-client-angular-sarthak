import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {

  findWidgetsForTopic = topicId =>
    fetch('http://localhost:8080/api/topic/' + topicId + '/widget')
      .then(response => response.json())
}

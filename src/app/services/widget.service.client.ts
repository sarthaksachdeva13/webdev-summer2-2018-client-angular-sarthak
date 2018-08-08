import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {

  findWidgetsForTopic = topicId =>
    fetch('https://sarthakwebdev.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json())
}

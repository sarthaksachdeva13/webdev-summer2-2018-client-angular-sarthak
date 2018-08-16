import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {


  findAllQuizzes = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/quiz')
      .then(response => response.json())

  findQuizById = qID =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/quiz/' + qID)
      .then(response => response.json())

  submitQuiz = quiz =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => (response.json()))

  getSubmissions = qID =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/quiz/' + qID + '/submission', {
      credentials: 'include'
    }).then(response => response.json())


  getSubmission = (qID, submissionId) =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/quiz/' + qID + '/submission/' + submissionId, {
      credentials: 'include'
    }).then(response => response.json())

}

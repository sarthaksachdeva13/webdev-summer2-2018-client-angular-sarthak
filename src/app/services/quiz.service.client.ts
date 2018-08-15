import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {


  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz')
      .then(response => response.json())

  findQuizById = qID =>
    fetch('http://localhost:3000/api/quiz/' + qID)
      .then(response => response.json())

  submitQuiz = quiz =>
    fetch('http://localhost:3000/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => (response.json()))

  getSubmissions = qID =>
    fetch('http://localhost:3000/api/quiz/' + qID + '/submission', {
      credentials: 'include'
    }).then(response => response.json())


  getSubmission = (qID, submissionId) =>
    fetch('http://localhost:3000/api/quiz/' + qID + '/submission/' + submissionId, {
      credentials: 'include'
    }).then(response => response.json())

}

export class QuizServiceClient {

  loadSubmissions = qID =>
    fetch('http://localhost:3000/api/quiz/' + qID + '/submissions')
      .then(response => response.json())


  submitQuiz = (quiz, qID) =>
    fetch('http://localhost:3000/api/quiz/' + qID, {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())


  findQuizById = (qID) =>
    fetch('http://localhost:8080/api/exam/' + qID)
      .then(response => response.json())


  findAllQuizzesForTopic = topicId =>
    fetch('http://localhost:8080/api/topic/' + topicId + '/exam')
      .then(response => response.json())


  findAllQuestionsForQuiz = (qID) =>
    fetch('http://localhost:8080/api/exam/' + qID + '/question')
      .then(response => response.json())

  findQuizAnswers = (qID, submissionId) =>
    fetch('http://localhost:3000/api/quiz/' + qID + '/submission/' + submissionId, {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

}

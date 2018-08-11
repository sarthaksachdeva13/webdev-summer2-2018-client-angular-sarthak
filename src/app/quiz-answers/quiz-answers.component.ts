import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  quizId = '';
  submissionId = '';
  quiz = {};
  questions = [];

  constructor(private quizService: QuizServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(params => this.setParams(params));
  }

  ngOnInit() {
  }

  setParams(params) {
    this.quizId = params['quizId'];
    this.submissionId = params['submissionId'];
    if (this.quizId && this.submissionId) {
      this.quizService.findQuizAnswers(this.quizId, this.submissionId)
        .then(quiz => {
          this.quiz = quiz;
          console.log(this.quiz);
        });

      this.quizService.findAllQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    }
  }

  backToSubmissions() {
    this.router.navigateByUrl('/quiz/' + this.quizId + '/submissions');
  }

}

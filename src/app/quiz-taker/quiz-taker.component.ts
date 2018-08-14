import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quizId = '';
  quiz = {};
  submission = {};
  questions = [];
  trueFalse = [
    "True",
    "False"
  ];

  constructor(private quizService: QuizServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadQuiz(params['quizId']));

    if (this.quizId && this.quizId !== null) {
      this.quizService.findAllQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    }
  }


  loadQuiz(quizId) {
    this.quizId = quizId;
    this.quizService
      .findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
  }

  submit(submission) {
    alert('Once submitted, your answers can not be changed. Are you sure you wish to submit?');
    this.quizService
      .submitQuiz(this.submission, this.quizId)
      .then(quiz => {
        if (quiz._id) {
          alert('Your quiz has been submitted');
          this.router.navigateByUrl('/');
        } else {
          alert('There was an error submitting your quiz. Please try again');
        }
      });
  }

  cancel() {
    alert('Your answers will not be saved. Are you sure you wish to exit?');
    this.router.navigateByUrl('/');
  }


  ngOnInit() {
  }


  toggleQuestionType(question) {
    if (question.options) {
      return 'multipleChoice';
    } else if (question.variables) {
      return 'fillInBlanks';
    } else if (question.isTrue) {
      return 'trueFalse';
    } else {
      return 'essay';
    }
  }

  determineBlanksQuestion(blanks) {
    if (blanks.description) {
      let variable = blanks.description.substring(blanks.description.indexOf('['), blanks.description.indexOf(']') + 1);
      let html = '<input type="text" [(ngModel)]="submission[blanks.id]"/>';
      let question = '<p>' + blanks.description.replace(variable, html) + '</p>';
      return question;
    }
    else {
      return '';
    }
  }

}

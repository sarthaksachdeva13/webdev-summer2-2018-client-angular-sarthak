import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Submission} from '../models/submission.model.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private quizService: QuizServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSubmission(params));
  }

  submission: Submission = new Submission();
  title;

  loadSubmission(params) {
    const quizId = params['quizId'];
    const submissionId = params['submissionId'];

    this.quizService.getSubmission(quizId, submissionId)
      .then(submission => {
        this.submission = submission;
        this.title = submission.title;
      });
  }

  ngOnInit() {
  }

}

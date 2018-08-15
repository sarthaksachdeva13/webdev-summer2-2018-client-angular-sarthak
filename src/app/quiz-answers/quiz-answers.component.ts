import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Submission} from '../models/submission.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private quizService: QuizServiceClient,
              private route: ActivatedRoute,
              private router: Router,
              private authService: UserServiceClient) {
    this.route.params.subscribe(params => this.loadSubmission(params));
  }

  submission: Submission = new Submission();
  title;


  logout = () =>
    this.authService.logout()
      .then(() => this.router.navigate(['login']))

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

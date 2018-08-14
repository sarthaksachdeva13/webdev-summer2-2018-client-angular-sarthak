import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private aRoute: ActivatedRoute,
              private router: Router) {
    this.aRoute.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }

  quizId = '';
  submissions = [];

  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.service.loadSubmissions(this.quizId)
      .then(submissions => this.submissions = submissions);
  }

  viewQuizAnswers(submissionId) {
    this.router.navigateByUrl('/quiz/' + this.quizId + '/submission/' + submissionId);
  }

  ngOnInit() {
  }



}

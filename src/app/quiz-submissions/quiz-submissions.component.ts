import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Submission} from '../models/submission.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute,
              private router: Router,
              private authService: UserServiceClient) {

    this.route.params.subscribe(params => this.loadSubmissions(params['quizId']));
  }

  submissions: Submission[] = [];

  loadSubmissions(quizId) {
    this.service.getSubmissions(quizId)
      .then(submissions => this.submissions = submissions);
  }

  logout = () =>
    this.authService.logout()
      .then(() => this.router.navigate(['login']))

  ngOnInit() {
  }


}

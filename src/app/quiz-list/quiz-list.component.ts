import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Quiz} from '../models/quiz.model.client';
import {UserServiceClient} from '../services/user.service.client';
import { Router} from '@angular/router';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes: Quiz[] = [];

  constructor(private quizService: QuizServiceClient,
              private router: Router,
              private authService: UserServiceClient) {
  }

  logout = () =>
    this.authService.logout()
      .then(() => this.router.navigate(['login']))

  ngOnInit() {
    this.quizService.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

}

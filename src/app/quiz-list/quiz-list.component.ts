import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private quizService: QuizServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  quizzes = [];
  topicId;


  logout = () => this.userService.logout()
    .then(() => this.router.navigate(['login']))


  ngOnInit() {

    this.quizService.findAllQuizzesForTopic(this.topicId)
      .then(quizzes => this.quizzes = quizzes);

    this.router.navigateByUrl('/quizzes');
    console.log(this.quizzes);
  }

  setParams(params) {
    this.topicId = params['topicId'];
  }

}

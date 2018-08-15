import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question

  selectedChoiceValue

  constructor() {
  }

  ngOnInit() {
    console.log(this.question);
  }

  selected(value) {
    console.log(value);
    this.selectedChoiceValue = value;
    this.question.multipleChoiceAnswer = value;
    console.log(this.question.multipleChoiceAnswer);
  }

}

import { User } from './user.model.client';
import { Quiz } from './quiz.model.client';
import { Question } from './question.model.client';

export class Submission {
  student: {type: User};
  quiz: {type: Quiz};
  answers: [{
    question: Question,
    fillBlanksAnswers: {variable: String, choiceValue: String},
    multipleChoiceAnswer: String,
    essayAnswer: String,
    trueFalseAnswer: Boolean
  }];
  submissionTime: {type: Date};
}

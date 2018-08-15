export class Question {
  title: String
  points: Number
  description: String
  questionType: String
  blanks: [String]
  choices: [{
    text: String,
    choiceValue: String
  }]
  essayAnswer: String
  fillBlanksAnswers: Object
  trueFalseAnswer: Boolean
  multipleChoiceAnswer: String
}

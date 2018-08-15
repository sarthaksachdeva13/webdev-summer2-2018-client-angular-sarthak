import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {CourseServiceClient} from './services/course.service.client';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionsComponent} from './sections/sections.component';
import {SectionServiceClient} from './services/section.service.client';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {ModuleServiceClient} from './services/module.service.client';
import {LessonServiceClient} from './services/lesson.service.client';
import {TopicServiceClient} from './services/topic.service.client';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import {AdminComponent} from './admin/admin.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';
import {QuizServiceClient} from './services/quiz.service.client';
import {EssayQuestionComponent} from './essay-question/essay-question.component';
import {EssayAnswerComponent} from './essay-answer/essay-answer.component';
import {FillBlanksQuestionComponent} from './fill-blanks-question/fill-blanks-question.component';
import {FillBlanksAnswerComponent} from './fill-blanks-answer/fill-blanks-answer.component';
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {TrueFalseAnswerComponent} from './true-false-answer/true-false-answer.component';
import {MultipleChoiceQuestionComponent} from './multiple-choice-question/multiple-choice-question.component';
import {MultipleChoiceAnswerComponent} from './multiple-choice-answer/multiple-choice-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionsComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    AdminComponent,
    QuizListComponent,
    QuizTakerComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent,
    EssayQuestionComponent,
    EssayAnswerComponent,
    FillBlanksQuestionComponent,
    FillBlanksAnswerComponent,
    TrueFalseQuestionComponent,
    TrueFalseAnswerComponent,
    MultipleChoiceQuestionComponent,
    MultipleChoiceAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}





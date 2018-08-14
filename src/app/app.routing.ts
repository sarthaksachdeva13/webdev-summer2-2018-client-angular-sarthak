import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {AdminComponent} from './admin/admin.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteboardComponent},
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'course/:courseId/section', component: SectionsComponent},
  {path: 'quizzes', component: QuizListComponent},
  {path: 'quiz/:qID', component: QuizTakerComponent},
  {path: 'quiz/:qID/submissions', component: QuizSubmissionsComponent},
  {path: 'quiz/:qID/submission/:submissionId', component: QuizAnswersComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/course/:courseId', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: WhiteboardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

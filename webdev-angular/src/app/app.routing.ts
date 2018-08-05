import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteboardComponent},
  {path: 'enrollments', component: EnrollmentComponent},
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sections', component: SectionsComponent},
  {path: '**', component: WhiteboardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

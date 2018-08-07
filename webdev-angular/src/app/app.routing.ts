import {Routes, RouterModule} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteboardComponent},
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'course/:courseId/section', component: SectionsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/course/:courseId', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: WhiteboardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

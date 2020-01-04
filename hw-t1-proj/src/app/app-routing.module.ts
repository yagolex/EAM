import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Add Course'
    }
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Edit Course'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      breadcrumb: 'Page Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}

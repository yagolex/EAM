import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCourseComponent } from './edit-course.component';

const routes: Routes = [
  {
    path: ':id',
    component: EditCourseComponent,
    data: { title: 'Edit Course page title' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCourseRoutingModule {}

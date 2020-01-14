import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { SharedModule } from '../shared/shared.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [CourseCrudComponent, EditCourseComponent, AddCourseComponent],
  imports: [AppRoutingModule, CommonModule, FormsModule, SharedModule],
  providers: [],
  exports: [CourseCrudComponent, EditCourseComponent]
})
export class CoursesModule {}

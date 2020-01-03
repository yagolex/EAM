import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { SharedModule } from '../shared/shared.module';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [CourseCrudComponent, EditCourseComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [],
  exports: [CourseCrudComponent, EditCourseComponent]
})
export class CoursesModule {}

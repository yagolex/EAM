import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCrudComponent } from './course-crud/course-crud.component';

@NgModule({
  declarations: [CourseCrudComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [CourseCrudComponent]
})
export class CoursesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CourseCrudComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [],
  exports: [CourseCrudComponent]
})
export class CoursesModule {}

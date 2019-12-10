import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCrudComponent {
  @Input() activeCourse: Course;
  @Output() cancelCourseCrudEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveCourseCrudEvent: EventEmitter<Course> = new EventEmitter<Course>();

  save() {
    this.saveCourseCrudEvent.emit(this.activeCourse);
  }

  cancel() {
    this.cancelCourseCrudEvent.emit();
  }
}

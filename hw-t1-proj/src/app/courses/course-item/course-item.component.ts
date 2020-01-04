import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LoggerService } from '../../core/services/logger.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() courseItem: Course;

  @Output() deleteCourseItemEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() editCourseItemEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private logger: LoggerService) {}

  deleteItem() {
    this.logger.log('Item Component - deleteItem');
    this.deleteCourseItemEvent.emit(this.courseItem.id);
  }

  editItem() {
    this.logger.log('Item Component - editItem');
    this.editCourseItemEvent.emit(this.courseItem.id);
  }
}

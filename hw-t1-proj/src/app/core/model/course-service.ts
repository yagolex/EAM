import { Course } from './course';
import { Injectable } from '@angular/core';
import { ICourseItem } from './i-course-item';

@Injectable()
export class CourseService {
  getCourseList(): ICourseItem[] {
    return [
      Course.GetCourse(
        'Video course 2. Name Tag',
        'Learn about your other course description.',
        new Date(2019, 10, 20),
        602,
        2
      ),
      Course.GetCourse(
        'Video course 1. Name Tag',
        'Learn about where you can find course description.',
        new Date(2019, 10, 10),
        541,
        1
      ),
      Course.GetCourse(
        'Video course 3. Name Tag',
        'Learn about your third course.',
        new Date(2030, 13, 29),
        663,
        3,
        true
      )
    ];
  }
}

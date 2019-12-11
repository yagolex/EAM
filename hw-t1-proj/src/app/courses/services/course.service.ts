import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable()
export class CourseService {
  private internalCourseList: Course[] = [
    CourseService.getNewCourse(
      'Video course 2. Name Tag',
      'Learn about your other course description.',
      new Date(2019, 10, 20),
      602,
      2
    ),
    CourseService.getNewCourse(
      'Video course 1. Name Tag',
      'Learn about where you can find course description.',
      new Date(2019, 10, 10),
      541,
      1
    ),
    CourseService.getNewCourse(
      'Video course 3. Name Tag',
      'Learn about your third course.',
      new Date(2030, 13, 29),
      663,
      3,
      true
    )
  ];

  public static getNewCourse(
    title: string,
    description: string,
    startDate: Date,
    durationMinutes: number,
    id: number,
    topRated: boolean = false,
    authors: string = ''
  ): Course {
    return { title, description, creationDate: startDate, durationMinutes, id, topRated, authors };
  }

  getCourseList(): Course[] {
    return this.internalCourseList;
  }

  updateCourse(updatedCourseItem: Course): boolean {
    const oldCourse = this.getCourseById(updatedCourseItem.id);
    const index = this.internalCourseList.indexOf(oldCourse);
    this.internalCourseList[index] = updatedCourseItem;

    return true;
  }

  deleteCourse(courseId: number): boolean {
    const oldCourse = this.getCourseById(courseId);
    const index = this.internalCourseList.indexOf(oldCourse);
    this.internalCourseList.splice(index, 1);
    return true;
  }

  getCourseById(couseId: number): Course {
    const result = this.internalCourseList.filter(item => item.id === couseId);
    if (result) {
      return result[0];
    }
    return null;
  }
}

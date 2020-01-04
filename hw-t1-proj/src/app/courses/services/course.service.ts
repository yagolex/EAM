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
    title: string = '',
    description: string = '',
    startDate: Date = new Date(),
    durationMinutes: number = 0,
    id: number = 0,
    topRated: boolean = false,
    authors: string = ''
  ): Course {
    return { title, description, creationDate: startDate, durationMinutes, id, topRated, authors };
  }

  public getCourseList(): Course[] {
    return this.internalCourseList;
  }

  public addCourse(newCourseItem: Course): boolean {
    if (newCourseItem.id !== 0 && this.getCourseById(newCourseItem.id) !== null) {
      throw new Error('creating Course with duplicated ID.');
    }
    if (newCourseItem.id === 0) {
      newCourseItem.id = this.getMaxCourseId() + 1;
    }
    this.internalCourseList.push(newCourseItem);

    return true;
  }

  private getMaxCourseId(): number {
    let maxId: number = this.getMaxOfArray(
      this.internalCourseList.map(function(eachCourse) {
        return eachCourse.id;
      })
    );
    return maxId;
  }

  private getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  public updateCourse(updatedCourseItem: Course): boolean {
    const oldCourse = this.getCourseById(updatedCourseItem.id);
    const index = this.internalCourseList.indexOf(oldCourse);
    this.internalCourseList[index] = updatedCourseItem;

    return true;
  }

  public deleteCourse(courseId: number): boolean {
    const oldCourse = this.getCourseById(courseId);
    const index = this.internalCourseList.indexOf(oldCourse);
    this.internalCourseList.splice(index, 1);
    return true;
  }

  public getCourseById(courseId: number): Course {
    const result = this.internalCourseList.filter(item => item.id === courseId);
    if (result) {
      return result[0];
    }
    return null;
  }
}

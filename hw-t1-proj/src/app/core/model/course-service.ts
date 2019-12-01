import { Course } from './course';
import { Injectable } from '@angular/core';
import { ICourseItem } from './i-course-item';

@Injectable()
export class CourseService {
  private internalCourseList: ICourseItem[] = [
    CourseService.GetNewCourse(
      'Video course 2. Name Tag',
      'Learn about your other course description.',
      new Date(2019, 10, 20),
      602,
      2
    ),
    CourseService.GetNewCourse(
      'Video course 1. Name Tag',
      'Learn about where you can find course description.',
      new Date(2019, 10, 10),
      541,
      1
    ),
    CourseService.GetNewCourse(
      'Video course 3. Name Tag',
      'Learn about your third course.',
      new Date(2030, 13, 29),
      663,
      3,
      true
    )
  ];

  public static GetNewCourse(
    title: string,
    description: string,
    startDate: Date,
    durationMinutes: number,
    id: number,
    topRated: boolean = false
  ): Course {
    const tmpCourse = new Course();
    tmpCourse.title = title;
    tmpCourse.description = description;
    tmpCourse.creationDate = startDate;
    tmpCourse.durationMinutes = durationMinutes;
    tmpCourse.id = id;
    tmpCourse.topRated = topRated;

    return tmpCourse;
  }

  GetCourseList(): ICourseItem[] {
    return this.internalCourseList;
  }

  UpdateCourse(updatedCourseItem: ICourseItem): boolean {
    const oldCourse = this.GetCourseById(updatedCourseItem.id);
    const index = this.internalCourseList.indexOf(oldCourse);
    this.internalCourseList[index] = updatedCourseItem;

    return true;
  }

  DeleteCourse(courseId: number): boolean {
    const oldCourse = this.GetCourseById(courseId);
    const index = this.internalCourseList.indexOf(oldCourse);
    this.internalCourseList.splice(index, 1);
    return true;
  }

  GetCourseById(couseId: number): ICourseItem {
    const result = this.internalCourseList.filter(item => item.id === couseId);
    if (result) {
      return result[0];
    }
    return null;
  }

  CreateCourse(
    title: string,
    description: string,
    startDate: Date,
    durationMinutes: number,
    topRated: boolean = false
  ): ICourseItem {
    this.internalCourseList.sort(item => item.id);
    const newCourseId: number = 1;
    const newCourse = CourseService.GetNewCourse(
      title,
      description,
      startDate,
      durationMinutes,
      newCourseId,
      topRated
    );

    this.internalCourseList.push(newCourse);

    return this.GetCourseById(newCourseId);
  }
}

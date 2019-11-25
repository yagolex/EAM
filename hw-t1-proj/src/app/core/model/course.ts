import { Injectable } from '@angular/core';
import { ICourseItem } from 'src/app/core/model/i-course-item';

@Injectable()
export class Course implements ICourseItem {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  durationMinutes: number;
  topRated: boolean;

  constructor() {
    this.creationDate = new Date();
    this.topRated = false;
  }

  static GetCourse(
    title: string,
    description: string,
    startDate: Date,
    durationMinutes: number,
    id: number,
    topRated: boolean = false
  ) {
    const c1 = new Course();
    c1.title = title;
    c1.description = description;
    c1.creationDate = startDate;
    c1.durationMinutes = durationMinutes;
    c1.id = id;
    c1.topRated = topRated;

    return c1;
  }
}

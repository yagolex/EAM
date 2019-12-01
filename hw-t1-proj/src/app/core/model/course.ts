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
}

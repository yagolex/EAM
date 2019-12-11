import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../../core/services/logger.service';
import { FilterByPipe } from '../../shared/pipes/filter-by.pipe';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: Course[];
  public selectedCourse: Course;

  constructor(
    private courseService: CourseService,
    private logger: LoggerService,
    private filter: FilterByPipe
  ) {}

  public deleteCourseItem(id: number): void {
    if (confirm('are you sure to delete course with id = ' + id)) {
      // this.logger.log(`List component - deleteCourseItem - with id = ${id}`);
      if (this.courseService.deleteCourse(id)) {
        this.courseList = this.courseService.getCourseList();
      }
    }
  }

  public saveSelectedCourse(updatedCourse: Course): void {
    this.logger.log(`List component - saveSelectedCourse with id = ${updatedCourse.id}`);
    this.selectedCourse = null;
  }

  public cancelSelectedCourse(): void {
    this.logger.log(`List component - cancelSelectedCourse`);
    this.selectedCourse = null;
  }

  public editCourseItem(id: number): void {
    //this.logger.log(`List component - editCourseItem with id = ${id}`);
    this.selectedCourse = this.courseService.getCourseList().filter(item => item.id === id)[0];
  }

  public loadMoreCourseItems(): void {
    this.logger.log(`List component - loadMoreCourseItems`);
  }

  public filterCourseItems(searchCriteria: string): void {
    // this.logger.log(`List component - filterCourseItems - ${searchCriteria}`);
    this.courseList = this.filter.transform(this.courseService.getCourseList(), searchCriteria);
  }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
  }

  public hasItems(): boolean {
    return this.courseList != null && this.courseList.length > 0;
  }

  public hasCouseSelected(): boolean {
    return this.selectedCourse != null && this.selectedCourse != undefined;
  }
}

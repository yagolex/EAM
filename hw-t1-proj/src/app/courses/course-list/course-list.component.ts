import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../../core/services/logger.service';
import { FilterByPipe } from '../../shared/pipes/filter-by.pipe';
import { Course } from '../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: Course[];

  constructor(
    private courseService: CourseService,
    private logger: LoggerService,
    private filter: FilterByPipe,
    private router: Router
  ) {}

  public deleteCourseItem(id: number): void {
    if (confirm('are you sure to delete course with id = ' + id)) {
      // this.logger.log(`List component - deleteCourseItem - with id = ${id}`);
      if (this.courseService.deleteCourse(id)) {
        this.courseList = this.courseService.getCourseList();
      }
    }
  }

  public editCourseItem(id: number): void {
    this.logger.log(`List component - editCourseItem with id = ${id}`);
    //let selectedCourse = this.courseService.getCourseList().filter(item => item.id === id)[0];
    this.router.navigate(['courses', id], {
      queryParams: { redirectedFromClass: true }
    });
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
}

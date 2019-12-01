import { Component, OnInit } from '@angular/core';
import { CourseService } from '../model/course-service';
import { ICourseItem } from '../model/i-course-item';
import { LoggerService } from '../model/logger-service';
import { FilterByPipe } from '../filter-by.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: ICourseItem[];

  constructor(
    private courseService: CourseService,
    private logger: LoggerService,
    private filter: FilterByPipe
  ) {}

  public deleteCourseItem(id: number): void {
    if (confirm('are you sure to delete course with id = ' + id)) {
      // this.logger.log(`List component - deleteCourseItem - with id = ${id}`);
      if (this.courseService.DeleteCourse(id)) {
        this.courseList = this.courseService.GetCourseList();
      }
    }
  }

  public editCourseItem(id: number): void {
    this.logger.log(`List component - editCourseItem with id = ${id}`);
  }

  public loadMoreCourseItems(): void {
    this.logger.log(`List component - loadMoreCourseItems`);
  }

  public filterCourseItems(searchCriteria: string): void {
    // this.logger.log(`List component - filterCourseItems - ${searchCriteria}`);
    this.courseList = this.filter.transform(this.courseService.GetCourseList(), searchCriteria);
  }

  ngOnInit() {
    this.courseList = this.courseService.GetCourseList();
  }

  public hasItems(): boolean {
    return this.courseList != null && this.courseList.length > 0;
  }
}

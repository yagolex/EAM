import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../../core/services/logger.service';
import { Course } from '../models/course';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

const DEFAULT_START: number = 0;
const DEFAULT_COUNT: number = 10;

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courseList: Course[];
  private start: number = DEFAULT_START;
  private searchCriteria: string = null;
  private loadSub: Subscription;
  private deleteSub: Subscription;

  constructor(
    private courseService: CourseService,
    private logger: LoggerService,
    private router: Router
  ) {}

  public deleteCourseItem(id: number): void {
    if (confirm('are you sure to delete course with id = ' + id)) {
      this.deleteSub = this.courseService.deleteCourse(id).subscribe(
        res => {
          this.logger.log('delete successful for course with id = ' + id);
          this.loadCourses();
        },
        err => {
          this.logger.log(JSON.stringify(err));
          alert('failed to delete item with id = ' + id);
        }
      );
    }
  }

  public editCourseItem(id: number): void {
    this.logger.log(`List component - editCourseItem with id = ${id}`);
    this.router.navigate(['courses', id]);
  }

  public loadMoreCourseItems(): void {
    this.start = this.start + DEFAULT_COUNT;
    this.loadCourses(true);
  }

  public filterCourseItems(searchCriteria: string): void {
    this.start = DEFAULT_START;
    this.searchCriteria = searchCriteria;
    this.loadCourses();
  }

  private loadCourses(append: boolean = false) {
    this.loadSub = this.courseService
      .getCourseList(this.start, DEFAULT_COUNT, this.searchCriteria)
      .subscribe((items: Course[]) => {
        append ? (this.courseList = this.courseList.concat(items)) : (this.courseList = items);
      });
  }

  ngOnInit() {
    this.loadCourses();
  }

  public hasItems(): boolean {
    return this.courseList != null && this.courseList.length > 0;
  }

  ngOnDestroy() {
    if (this.loadSub) {
      this.loadSub.unsubscribe();
    }
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}

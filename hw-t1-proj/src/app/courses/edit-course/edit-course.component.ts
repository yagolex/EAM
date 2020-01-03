import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { LoggerService } from 'src/app/core/services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public selectedCourse: Course;
  private sub: any;

  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    //console.log(this.route.snapshot); // ActivatedRouterSnapshot
  }

  ngOnInit() {
    this.logger.log(
      `edit-course component - getCourseList - ${JSON.stringify(
        JSON.stringify(this.courseService.getCourseList())
      )}`
    );
    this.sub = this.route.params.subscribe(routeParams => {
      let courseId = routeParams.id;
      this.logger.log(`edit-course component - selectedId = ${courseId}`);
      this.selectedCourse = this.courseService.getCourseById(parseInt(courseId));
      this.logger.log(
        `edit-course component - selectedCourse = ${JSON.stringify(this.selectedCourse)}`
      );
    });
  }

  public saveSelectedCourse(updatedCourse: Course): void {
    this.logger.log(`edit-course component - saveSelectedCourse with id = ${updatedCourse.id}`);
    this.selectedCourse = null;
    this.router.navigate(['/courses']);
  }

  public cancelSelectedCourse(): void {
    this.logger.log(`edit-course component - cancelSelectedCourse`);
    this.selectedCourse = null;
    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

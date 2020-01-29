import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { LoggerService } from 'src/app/core/services/logger.service';

const DECIMAL_RADIX = 10;

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public selectedCourse: Course;
  private selectedCourseBackup: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(routeParams => {
      const courseId = routeParams.id;
      this.courseService.getCourseById(parseInt(courseId, DECIMAL_RADIX)).subscribe(
        (res: Course) => {
          this.selectedCourse = res;
          this.selectedCourseBackup = JSON.stringify(this.selectedCourse);
        },
        err => {
          this.logger.log(err);
          alert('Unable to load Course to edit, pls retry.');
        }
      );
    });
  }

  public saveSelectedCourse(updatedCourse: Course): void {
    this.courseService.updateCourse(updatedCourse);
    this.router.navigate(['/courses']);
  }

  public cancelSelectedCourse(): void {
    this.courseService.updateCourse(JSON.parse(this.selectedCourseBackup));
    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}

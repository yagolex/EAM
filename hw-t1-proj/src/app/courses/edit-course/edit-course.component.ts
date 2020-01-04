import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

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
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(routeParams => {
      let courseId = routeParams.id;
      this.selectedCourse = this.courseService.getCourseById(parseInt(courseId));
      this.selectedCourseBackup = JSON.stringify(this.selectedCourse);
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
    this.selectedCourse = null;
    this.selectedCourseBackup = null;
    this.sub.unsubscribe();
  }
}

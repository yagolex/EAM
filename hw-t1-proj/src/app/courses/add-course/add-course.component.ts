import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public selectedCourse: Course;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.selectedCourse = CourseService.getNewCourse();
  }

  public saveSelectedCourse(updatedCourse: Course): void {
    this.courseService.addCourse(updatedCourse).subscribe(
      (result: Course) => {
        this.logger.log('save successful, id assigned = ' + result.id);
        this.router.navigate(['/courses']);
      },
      err => {
        this.logger.log(JSON.stringify(err));
        alert('failed to create new item, pls try again.');
      }
    );
  }

  public cancelSelectedCourse(): void {
    this.router.navigate(['/courses']);
  }
}

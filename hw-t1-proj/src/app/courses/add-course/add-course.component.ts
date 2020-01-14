import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public selectedCourse: Course;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.selectedCourse = CourseService.getNewCourse();
  }

  public saveSelectedCourse(updatedCourse: Course): void {
    this.courseService.addCourse(updatedCourse);
    this.router.navigate(['/courses']);
  }

  public cancelSelectedCourse(): void {
    this.router.navigate(['/courses']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { LoggerService } from 'src/app/core/services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  public selectedCourse: Course;

  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    //console.log(this.route.snapshot); // ActivatedRouterSnapshot
  }

  ngOnInit() {
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    //this.hero$ = this.service.getHero(id);
    this.selectedCourse = this.courseService.getCourseList().filter(item => item.id === id)[0];
    // this.route.params.subscribe(routeParams => {
    //   this.selectedCourse = routeParams.selectedCourse;
    // });
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
}

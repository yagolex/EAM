import { Component, OnInit } from '@angular/core';
import { CourseService } from '../model/course-service';
import { ICourseItem } from '../model/i-course-item';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList : ICourseItem [];

  constructor(private courseService:CourseService) { 
  }

  ngOnInit() {
      this.courseList = this.courseService.getCourseList();
  }

}

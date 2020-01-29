import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LoggerService } from '../core/services/logger.service';

@Directive({
  selector: '[appCourseItemBorder]'
})
export class CourseItemBorderDirective implements OnInit {
  @Input() courseDate: Date;

  constructor(private elementRef: ElementRef, private logger: LoggerService) {}

  ngOnInit() {
    if (this.courseDate) {
      this.setBorderColor(this.courseDate);
    }
  }

  setBorderColor(creationDate: Date) {
    const currentDate: Date = new Date();
    const ftDaysBack: Date = new Date();
    ftDaysBack.setDate(ftDaysBack.getDate() - 14);

    if (creationDate < currentDate && creationDate >= ftDaysBack) {
      this.elementRef.nativeElement.style.borderColor = 'green';
    }
    if (creationDate > currentDate) {
      this.elementRef.nativeElement.style.borderColor = 'blue';
    }
  }
}

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
    ftDaysBack.setDate(ftDaysBack.getDate() - 14); // set date for 14 days back

    // todo: find out why this does not work
    // commented below as it is flooding console

    // this.logger.log(`currentDate date = ${currentDate}`);
    // this.logger.log(`14 days back from now = ${ftDaysBack}`);
    // this.logger.log(`creation date ${creationDate}`);
    // this.logger.log(
    //   `is creationDate < currentDate&&creationDate>=ftDaysBack ${creationDate < currentDate &&
    //     creationDate >= ftDaysBack}`
    // );
    // this.logger.log(`is creationDate > currentDate = ${creationDate > currentDate}`);

    if (creationDate < currentDate && creationDate >= ftDaysBack) {
      this.elementRef.nativeElement.style.borderColor = 'green';
    }
    if (creationDate > currentDate) {
      this.elementRef.nativeElement.style.borderColor = 'blue';
    }
  }
}

import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { Course } from '../models/course';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoggerService } from 'src/app/core/services/logger.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCrudComponent implements OnChanges, OnDestroy {
  @Input() activeCourse: Course = {
    title: '',
    description: '',
    creationDate: new Date(),
    durationMinutes: 0,
    authors: '',
    id: 0,
    topRated: false
  };
  @Output() cancelCourseCrudEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveCourseCrudEvent: EventEmitter<Course> = new EventEmitter<Course>();

  private courseDurationSub: Subscription;

  crudForm: FormGroup = new FormGroup({
    courseTitle: new FormControl(this.activeCourse.title, [
      Validators.required,
      Validators.maxLength(50)
    ]),
    courseDescription: new FormControl(this.activeCourse.description, [
      Validators.required,
      Validators.maxLength(500)
    ]),
    // Date format should be dd/MM/yyyy Implement as separate component. Implement ng_value_accessor and ng_validators
    courseDate: new FormControl(this.activeCourse.creationDate, [
      Validators.required,
      this.ptDateValidator
    ]),
    // Only numbers allow. Implement as separate component. Implement ng_value_accessor and ng_validators
    courseDuration: new FormControl(this.activeCourse.durationMinutes, [Validators.required]),
    courseDurationHours: new FormControl(),
    // At least one author should be (see below details). Implement as separate component. Implement ng_value_accessor and ng_validators
    courseAuthors: new FormControl(this.activeCourse.authors, [
      Validators.required,
      Validators.maxLength(50)
    ])
  });

  // "dd/mm/yyyy"
  ptDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const ptDatePattern = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
    if (control.pristine) {
      return null;
    }
    if (!control.value.match(ptDatePattern)) {
      return { numeric: true };
    }
    return null;
  }

  constructor(private logger: LoggerService, private datePipe: DatePipe) {}

  ngOnChanges(changes: SimpleChanges) {
    this.logger.log('CourseCrudComponent - ngOnChanges');
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];

        if (propName === 'activeCourse' && change.currentValue) {
          this.courseDurationSub = this.crudForm
            .get('courseDuration')
            .valueChanges.subscribe(durationMinutes => {
              // this.logger.log('courseDuration value changed.');
              // this.logger.log(JSON.stringify(durationMinutes));
              this.crudForm.patchValue({
                // courseDurationHours: new GetDurationPipe().transform(durationMinutes)
                courseDurationHours: this.getDuration(durationMinutes)
              });
            });
          this.populateFormWithData(change.currentValue as Course);
        }
      }
    }
  }

  private getDuration(value: any): string {
    const minutes = value % 60;
    const hours = Math.trunc(value / 60);
    return `${hours}h ${minutes}min`;
  }

  private getFormattedDate(value: any): string {
    const minutes = value % 60;
    const hours = Math.trunc(value / 60);
    return `${hours}h ${minutes}min`;
    // | date: 'dd MMM, yyyy'
  }

  private populateFormWithData(inputCourse: Course) {
    this.crudForm.patchValue({
      courseTitle: inputCourse.title,
      courseDescription: inputCourse.description,
      courseDate: this.datePipe.transform(inputCourse.creationDate, 'dd/MM/yyyy'),
      courseDuration: inputCourse.durationMinutes,
      courseAuthors: inputCourse.authors
    });
  }

  save() {
    // this.logger.log(`crudForm.value.courseTitle ${this.crudForm.value.courseTitle}`);
    // this.logger.log(`crudForm.value.courseDescription ${this.crudForm.value.courseDescription}`);
    // this.logger.log(`crudForm.value.courseDate ${this.crudForm.value.courseDate}`);
    // this.logger.log(`crudForm.value.courseDuration ${this.crudForm.value.courseDuration}`);
    // this.logger.log(`crudForm.value.courseAuthors ${this.crudForm.value.courseAuthors}`);

    if (this.crudForm.valid) {
      this.saveCourseCrudEvent.emit(this.activeCourse);
      // alert('form is valid');
    } else {
      alert('form is not valid');
    }
  }

  cancel() {
    this.cancelCourseCrudEvent.emit();
  }

  ngOnDestroy() {
    if (this.courseDurationSub) {
      this.courseDurationSub.unsubscribe();
    }
  }
}

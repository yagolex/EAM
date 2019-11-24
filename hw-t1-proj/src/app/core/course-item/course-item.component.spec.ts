import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { LoggerService } from '../model/logger-service';
import { Course } from '../model/course';
import { By } from '@angular/platform-browser';

describe('#CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
      providers: [LoggerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    const course = Course.GetCourse(
      'Video course 1. Name Tag',
      'Learn about where you can find course description.',
      new Date(2019, 10, 27),
      541,
      1
    );
    component.courseItem = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react on deleteItem click', () => {
    const spy = spyOn(component, 'deleteItem');
    const el = fixture.debugElement.query(By.css('#delete-course-button'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should react on editItem click', () => {
    const spy = spyOn(component, 'editItem');
    const el = fixture.debugElement.query(By.css('#edit-course-button'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});

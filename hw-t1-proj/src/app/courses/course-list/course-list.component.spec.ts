import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { SearchSectionComponent } from '../../core/search-section/search-section.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../../core/services/logger.service';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';
import { CourseItemBorderDirective } from '../course-item-border.directive';
import { GetDurationPipe } from '../../shared/pipes/get-duration.pipe';

describe('#CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let courseService: CourseService;
  const courseServiceStub: Partial<CourseService> = {
    getMockCourseList: () => [
      CourseService.getNewCourse('Name', 'Description', new Date(2019, 10, 27), 541, 1)
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        SearchSectionComponent,
        CourseItemComponent,
        OrderByPipe,
        CourseItemBorderDirective,
        GetDurationPipe
      ],
      imports: [FormsModule],
      providers: [LoggerService, { provide: CourseService, useValue: courseServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    courseService = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should react on loadMoreCourseItems click', () => {
    const spy = spyOn(component, 'loadMoreCourseItems');
    const el = fixture.debugElement.query(By.css('#load-more-button'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should get deleteCourse event from child ', () => {
    const methodSpy = spyOn(component, 'deleteCourseItem');
    const child = fixture.debugElement.query(By.directive(CourseItemComponent));
    child.triggerEventHandler('deleteCourseItemEvent', 1);
    fixture.detectChanges();
    expect(methodSpy).toHaveBeenCalled();
  });

  it('should get editCourseItem event from child ', () => {
    const methodSpy = spyOn(component, 'editCourseItem');
    const child = fixture.debugElement.query(By.directive(CourseItemComponent));
    child.triggerEventHandler('editCourseItemEvent', 1);
    fixture.detectChanges();
    expect(methodSpy).toHaveBeenCalled();
  });

  it('should have courseList initialized ', () => {
    component.ngOnInit();
    expect(component.courseList).toEqual(courseService.getMockCourseList());
  });
});

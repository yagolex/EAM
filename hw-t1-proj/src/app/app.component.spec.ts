import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { CourseListComponent } from './core/course-list/course-list.component';
import { FooterComponent } from './core/footer/footer.component';
import { SearchSectionComponent } from './core/search-section/search-section.component';
import { CourseItemComponent } from './core/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { CourseService } from './core/model/course.service';
import { DatePipe } from '@angular/common';
import { UserService } from './core/model/user.service';
import { LoggerService } from './core/model/logger.service';
import { OrderByPipe } from './core/order-by.pipe';
import { CourseItemBorderDirective } from './core/course-item-border.directive';
import { GetDurationPipe } from './core/get-duration.pipe';
import { FilterByPipe } from './core/filter-by.pipe';

describe('#AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        CourseListComponent,
        FooterComponent,
        SearchSectionComponent,
        CourseItemComponent,
        OrderByPipe,
        CourseItemBorderDirective,
        GetDurationPipe
      ],
      providers: [CourseService, DatePipe, UserService, LoggerService, FilterByPipe]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hw-t1-proj'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hw-t1-proj');
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CourseService } from './model/course-service';
import { DatePipe } from '@angular/common';
import { UserService } from './model/user-service';


@NgModule({
  declarations: [CourseListComponent, HeaderComponent, FooterComponent, CourseItemComponent, BreadcrumbsComponent, SearchSectionComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CourseService,
    DatePipe,
    UserService
  ],
  exports: [
    CourseListComponent, HeaderComponent, FooterComponent, CourseItemComponent, BreadcrumbsComponent, SearchSectionComponent
  ]
})
export class CoreModule { }

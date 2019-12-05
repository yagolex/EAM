import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from '../courses/course-item/course-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CourseService } from '../courses/models/course.service';
import { DatePipe } from '@angular/common';
import { UserService } from './models/user.service';

import { FormsModule } from '@angular/forms';
import { LoggerService } from '../shared/models/logger.service';
import { CourseItemBorderDirective } from '../courses/course-item-border.directive';
import { GetDurationPipe } from './get-duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterByPipe } from '../courses/filter-by.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticationService } from './models/auth.service';
import { GetFullNamePipe } from './get-full-name.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CourseListComponent,
    HeaderComponent,
    FooterComponent,
    CourseItemComponent,
    BreadcrumbsComponent,
    SearchSectionComponent,
    CourseItemBorderDirective,
    GetDurationPipe,
    OrderByPipe,
    FilterByPipe,
    LoginPageComponent,
    GetFullNamePipe
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [
    CourseService,
    DatePipe,
    UserService,
    LoggerService,
    FilterByPipe,
    AuthenticationService
  ],
  exports: [
    CourseListComponent,
    HeaderComponent,
    FooterComponent,
    CourseItemComponent,
    BreadcrumbsComponent,
    SearchSectionComponent,
    LoginPageComponent
  ]
})
export class CoreModule {}

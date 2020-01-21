import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from '../courses/course-item/course-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CourseService } from '../courses/services/course.service';
import { DatePipe } from '@angular/common';
import { UserService } from './services/user.service';

import { FormsModule } from '@angular/forms';
import { LoggerService } from './services/logger.service';
import { CourseItemBorderDirective } from '../courses/course-item-border.directive';
import { GetDurationPipe } from '../shared/pipes/get-duration.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticationService } from './services/auth.service';
import { GetFullNamePipe } from '../shared/pipes/get-full-name.pipe';
import { SharedModule } from '../shared/shared.module';
import { CoursesModule } from '../courses/courses.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from './auth.guard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplyTokenInterceptor } from './services/apply-token.interceptor';

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
    LoginPageComponent,
    GetFullNamePipe,
    PageNotFoundComponent
  ],
  imports: [AppRoutingModule, CommonModule, FormsModule, SharedModule, CoursesModule],
  providers: [
    CourseService,
    DatePipe,
    UserService,
    LoggerService,
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplyTokenInterceptor,
      multi: true
    }
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

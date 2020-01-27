import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { CoreModule } from '../core/core.module';
import { LoggerService } from '../core/services/logger.service';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/spinner.interceptor';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    SpinnerService,
    LoggerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule {}

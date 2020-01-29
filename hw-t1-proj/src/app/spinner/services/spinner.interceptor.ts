import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { finalize, catchError } from 'rxjs/operators';
import { LoggerService } from 'src/app/core/services/logger.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService, private logger: LoggerService) {}
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(httpReq).pipe(
      finalize(() => this.spinnerService.hide()),
      catchError(err => {
        this.spinnerService.hide();
        this.logger.log('SpinnerInterceptor - err' + JSON.stringify(err));
        throw err;
      })
    );
  }
}

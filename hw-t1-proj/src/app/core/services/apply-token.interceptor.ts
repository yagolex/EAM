import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from './auth.service';

@Injectable()
export class ApplyTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      let headers = httpReq.headers.set('Authorization', this.authService.authenticationToken);

      const newReq = httpReq.clone({
        headers: headers
      });

      return next.handle(newReq);
    } else {
      return next.handle(httpReq);
    }
  }
}

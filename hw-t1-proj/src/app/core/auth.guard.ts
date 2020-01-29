import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/auth.service';
import { tap } from 'rxjs/operators';
import { LoggerService } from './services/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private logger: LoggerService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      tap(
        res => {
          this.logger.log('authService - succeed with result - ' + JSON.stringify(res));
          if (!res) {
            this.router.navigate(['/login']);
          }
          return res;
        },
        err => {
          this.logger.log('authService - failed with error - ' + JSON.stringify(err));
          return false;
        }
      )
    );
  }
}

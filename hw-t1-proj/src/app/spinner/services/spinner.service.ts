import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoggerService } from 'src/app/core/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(private logger: LoggerService) {}
  isLoading = new Subject<boolean>();

  isLoadingSubscription(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
  show() {
    this.logger.log('SpinnerService - show');
    this.isLoading.next(true);
  }
  hide() {
    this.logger.log('SpinnerService - hide');
    this.isLoading.next(false);
  }
}

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { LoggerService } from 'src/app/core/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(private logger: LoggerService) {}
  private isLoading = new BehaviorSubject<boolean>(false);

  isLoading$ = this.isLoading.asObservable();

  show() {
    this.logger.log('SpinnerService - show');
    this.isLoading.next(true);
  }
  hide() {
    this.logger.log('SpinnerService - hide');
    this.isLoading.next(false);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SpinnerService } from './spinner/services/spinner.service';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hw-t1-proj';
  isLoading: Observable<boolean>;

  constructor(private isLoadingService: SpinnerService, private router: Router) {}

  ngOnInit() {
    this.isLoading = this.isLoadingService.isLoadingSubscription();

    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe(event => {
        // If it's the start of navigation, `show()` a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.show();
          return;
        }

        // Else navigation has ended, so `hide()` a loading indicator
        this.isLoadingService.hide();
      });
  }
}

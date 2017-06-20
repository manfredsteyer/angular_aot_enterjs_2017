import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showWaitInfo: boolean;

  constructor(
    private router: Router) {

    // this.initAuth();
    this.initRouterEvents();
    // this.initI18N();
  }

  initRouterEvents() {
    this.router.events.subscribe(
      (event) => {

        console.debug('router-event', event);

        if (event instanceof NavigationStart) {
          this.showWaitInfo = true;
        }
        if (event instanceof NavigationEnd
          || event instanceof NavigationCancel
          || event instanceof NavigationError) {
          this.showWaitInfo = false;
        }

      }
    );
  }


}

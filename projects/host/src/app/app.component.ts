import {Component, inject, OnInit} from '@angular/core';
import {EventBusService} from 'event-bus'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  eventBus= inject(EventBusService);
  title = 'host';

  ngOnInit() {
    // clearing the profile on refresh so we don't show a selected book at the start.
    sessionStorage.clear()
  }
}

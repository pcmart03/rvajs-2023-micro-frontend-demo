import {Component, inject} from '@angular/core';
import {EventBusService} from 'event-bus'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  eventBus= inject(EventBusService);
  title = 'host';
}

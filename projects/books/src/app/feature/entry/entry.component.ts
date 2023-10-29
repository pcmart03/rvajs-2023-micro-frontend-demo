import {Component} from '@angular/core';
import { MfRemoteEntryComponent } from "../../../../../../dist/event-bus/lib/interfaces";

@Component({
  selector: 'app-entry',
  template: `
      <app-books></app-books>
  `
})
export class EntryComponent implements MfRemoteEntryComponent{

}

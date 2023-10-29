import {Component, Input} from '@angular/core';
import {MfEvent, MfRemoteEntryComponent} from "../../../../../../dist/event-bus/lib/interfaces";

@Component({
  selector: 'app-entry',
  template: `
      <app-profile (profileSaved)="onProfileSaved()"/>
  `
})
export class EntryComponent implements MfRemoteEntryComponent{
  @Input({required: true}) dispatch = (event: MfEvent) => {}

  onProfileSaved() {
    this.dispatch({type: "profileSaved"})
  }
}

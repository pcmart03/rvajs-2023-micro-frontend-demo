import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MfDispatchFn, MfEvent, MfListenForFn, MfRemoteEntryComponent } from "../../../../../../dist/event-bus/lib/interfaces";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-entry',
  template: `
      <app-books></app-books>
  `
})
export class EntryComponent implements MfRemoteEntryComponent, OnInit, OnDestroy {

  @Input({required: true}) listenFor = (eventType: string) => new Observable<MfEvent>();

  private profileSavedSubscription!: Subscription;

  ngOnInit(): void {
    this.profileSavedSubscription = this.listenFor("profileSaved").subscribe((_event) => {
      console.log(_event)
    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}

import { Injectable } from '@angular/core';
import {filter, Observable, Subject} from "rxjs";
import {MfEvent} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private events$ = new Subject<MfEvent>()

  dispatch = (event: MfEvent) => {
    this.events$.next(event);
  }

  subscribeToEvents = (eventTypes: string[] | null = null): Observable<MfEvent> => {
    return eventTypes
      ? this.events$.pipe(filter((event) => eventTypes.includes(event.type)))
      : this.events$.asObservable();
  }
}
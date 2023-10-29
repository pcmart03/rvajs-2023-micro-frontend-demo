import {MfEvent} from "./mf-event.interface";
import {Observable} from "rxjs";

export type MfDispatchFn = (event: MfEvent) => void;
export type MfListenForFn = (eventType: string) => Observable<MfEvent> | void
export interface MfRemoteEntryComponent {
  dispatch?: null | MfDispatchFn;
  listenFor?: null | MfListenForFn;
}
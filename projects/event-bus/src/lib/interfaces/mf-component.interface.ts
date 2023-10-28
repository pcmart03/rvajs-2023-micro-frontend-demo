import {MfEvent} from "./mf-event.interface";
import {Observable} from "rxjs";

export interface MfRemoteEntryComponent {
  dispatch?: (event: MfEvent) => void;
  listenFor?: (eventType: string) => Observable<MfEvent>;
}
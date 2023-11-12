import { Injectable } from '@angular/core';
import { Profile } from 'dist/shared-data';
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sessionStorageKey = "profile"
  postProfile(profile: Profile): Observable<Profile> {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(profile));
    return of(profile);
  }
}

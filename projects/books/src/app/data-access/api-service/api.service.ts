import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sessionStorageKey = "profile"
  getProfile(): Observable<any> {
    return of(sessionStorage.getItem(this.sessionStorageKey));
  }
}

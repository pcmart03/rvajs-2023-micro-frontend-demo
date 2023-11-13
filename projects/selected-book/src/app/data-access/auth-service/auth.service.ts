import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(): Observable<boolean> {
    return of(Boolean(sessionStorage.getItem("profile")));
  }
}

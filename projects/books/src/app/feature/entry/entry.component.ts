import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MfEvent, MfRemoteEntryComponent } from "../../../../../../dist/event-bus/lib/interfaces";
import { Observable, Subscription, switchMap } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { BOOKS_DATA } from '../../data/books';
import { ApiService } from '../../data-access/api-service/api.service';

@Component({
  selector: 'app-entry',
  template: `
      <app-books [books]="booksData"></app-books>
  `
})
export class EntryComponent implements MfRemoteEntryComponent, OnInit, OnDestroy {

  @Input({required: true}) listenFor = (eventType: string[]) => new Observable<MfEvent>();

  public booksData: Array<Book> = []

  private profileSavedSubscription!: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.profileSavedSubscription = this.listenFor(["profileSaved"]).pipe(
      // restart counter on every click
      switchMap(() => this.apiService.getProfile())
    ).subscribe((_event) => {
      let profile: any = JSON.parse(_event);
      this.booksData = BOOKS_DATA.filter(book => book.genre === profile.favoriteGenre);
    })
  }
  ngOnDestroy(): void {
    this.profileSavedSubscription.unsubscribe();
  }
}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MfEvent, MfRemoteEntryComponent } from "../../../../../../dist/event-bus/lib/interfaces";
import { Observable, Subscription } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { BOOKS_DATA } from '../../data/books';

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

  ngOnInit(): void {
    this.profileSavedSubscription = this.listenFor(["profileSaved"]).subscribe((_event) => {
      this.booksData = [...BOOKS_DATA];
      
    })
  }
  ngOnDestroy(): void {
    this.profileSavedSubscription.unsubscribe();
  }
}

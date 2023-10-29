import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { BOOKS_DATA } from '../../data/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  displayedColumns: string[] = ['name', 'genre', 'year'];
  dataToDisplay = [...BOOKS_DATA];

  dataSource = new BooksDataSource(this.dataToDisplay);

}

class BooksDataSource extends DataSource<Book> {
  private books$ = new ReplaySubject<Book[]>();

  constructor(initialData: Book[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Book[]> {
    return this.books$;
  }

  disconnect() {}

  setData(data: Book[]) {
    this.books$.next(data);
  }
}

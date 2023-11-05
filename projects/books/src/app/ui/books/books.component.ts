import { DataSource } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  public displayedColumns: string[] = ['name', 'genre', 'year'];
  public dataSource: BooksDataSource = new BooksDataSource([]);

  @Input()
  set books(data: Array<Book>) {
    this.dataSource = new BooksDataSource(data);
  }

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

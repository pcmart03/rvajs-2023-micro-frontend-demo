import { DataSource } from '@angular/cdk/collections';
import {Component, inject, Input} from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute)

  public displayedColumns: string[] = ['name', 'genre', 'year'];
  public dataSource: BooksDataSource = new BooksDataSource([]);

  selectBook(id: number) {
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {id}})
  }

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

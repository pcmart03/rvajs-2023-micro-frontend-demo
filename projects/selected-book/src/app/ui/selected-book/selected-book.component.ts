import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {BOOKS_DATA} from "book-data";

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.scss']
})
export class SelectedBookComponent {
  private route = inject(ActivatedRoute);

  book$ = this.route.queryParamMap.pipe(
    map(params => {
      const selectedId = params.get('id');
      return selectedId ? BOOKS_DATA.find(({id}) => parseInt(selectedId) === id ) : null;
    })
  )
}

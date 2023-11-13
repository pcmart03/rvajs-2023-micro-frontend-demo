import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {BOOKS_DATA} from "dist/shared-data";
import {AuthService} from "../../data-access/auth-service/auth.service";

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.scss']
})
export class SelectedBookComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isAuthenticated$ = inject(AuthService).isAuthenticated();

  book$ = this.route.queryParamMap.pipe(
    map(params => {
      const selectedId = params.get('id');
      return selectedId ? BOOKS_DATA.find(({id}) => parseInt(selectedId) === id ) : null;
    })
  )

  closeBook() {
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {}})
  }
}

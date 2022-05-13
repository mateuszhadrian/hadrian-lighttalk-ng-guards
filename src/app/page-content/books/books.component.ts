import {Component} from '@angular/core';
import {PageContentBaseService} from '../page-content-base.service';
import {BookDto} from '../../../utils/book.dto';
import {CanComponentDeactivate} from './prevent-accidental-leaving.guard';
import {Observable} from 'rxjs';
import {UrlTree} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent  implements CanComponentDeactivate {
  books$: Observable<BookDto[]> = this.pageContentBaseService.getBooks$();

  constructor(
    private pageContentBaseService: PageContentBaseService,
  ) { }

  // canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //
  // }

}

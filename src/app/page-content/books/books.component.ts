import {Component} from '@angular/core';
import {PageContentBaseService} from '../page-content-base.service';
import {BookDto} from '../../../utils/book.dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books$: Observable<BookDto[]> = this.pageContentBaseService.getBooks$();

  constructor(
    private pageContentBaseService: PageContentBaseService,
  ) { }

}

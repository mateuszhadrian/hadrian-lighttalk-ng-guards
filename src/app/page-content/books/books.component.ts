import { Component, OnInit } from '@angular/core';
import {PageContentBaseService} from '../page-content-base.service';
import {BookDto} from '../../../utils/book.dto';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: BookDto[] = []

  constructor(private pageContentBaseService: PageContentBaseService) { }

  ngOnInit(): void {
    this.books = this.pageContentBaseService.books
  }

}

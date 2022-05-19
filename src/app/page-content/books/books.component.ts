import {Component} from '@angular/core';
import {PageContentBaseService} from '../page-content-base.service';
import {BookDto} from '../../../utils/book.dto';
import {Observable} from 'rxjs';
import {UrlTree} from '@angular/router';
import {CanComponentDeactivate} from './prevent-accidental-leaving.guard';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements CanComponentDeactivate {
  books$: Observable<BookDto[]> = this.pageContentBaseService.getBooks$();
  isEditMode: boolean = false;
  editModeCounter: number = 0;
  areEditedItems: boolean = false;

  constructor(
    private pageContentBaseService: PageContentBaseService,
  ) { }

  setEditModeCounter(isEditMode: boolean){
    if (isEditMode){
      this.editModeCounter++
    } else {
      this.editModeCounter--
    }
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.editModeCounter && !this.isEditMode) {
      return confirm('Masz włączony tryb edycji. Czy na pewno chcesz opuścić kategorię?')
    } else {
      return true
    }
  }

}

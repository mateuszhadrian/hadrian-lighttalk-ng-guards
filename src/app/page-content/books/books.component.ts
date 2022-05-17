import {Component} from '@angular/core';
import {PageContentBaseService} from '../page-content-base.service';
import {BookDto} from '../../../utils/book.dto';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books$: Observable<BookDto[]> = this.pageContentBaseService.getBooks$();
  editedBookId: string = '';
  isEditMode: boolean = false;
  bookDetailsForm: FormGroup = new FormGroup({})

  constructor(
    private pageContentBaseService: PageContentBaseService,
  ) { }

  onEdit(id: string, title: string){
    this.isEditMode = true;
    this.editedBookId = id;
    this.bookDetailsForm = new FormGroup({
      'title': new FormControl(title),
    });
  }

  onSave(id: string){
    this.pageContentBaseService.renameBook(id, this.bookDetailsForm.controls['title'].value);
    this.isEditMode = false;
    this.editedBookId = '';
  }

}

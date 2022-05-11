import {Component, OnInit} from '@angular/core';
import {PageContentBaseService} from '../page-content-base.service';
import {BookDto} from '../../../utils/book.dto';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: BookDto[] = [];
  editedBookId: string = '';
  isEditMode: boolean = false;
  bookDetailsForm: FormGroup = new FormGroup({})

  constructor(
    private pageContentBaseService: PageContentBaseService,
  ) { }

  ngOnInit(): void {
    this.updateBooksList();
  }

  onEdit(id: string, title: string){
    this.isEditMode = true;
    this.editedBookId = id;
    this.bookDetailsForm = new FormGroup({
      'title': new FormControl(title),
    });
  }

  onSave(id: string){
    this.pageContentBaseService.renameBook(id, this.bookDetailsForm.controls['title'].value);
    this.updateBooksList();
    this.isEditMode = false;
    this.editedBookId = '';
  }

  updateBooksList(){
    this.books = this.pageContentBaseService.books;
  }

}

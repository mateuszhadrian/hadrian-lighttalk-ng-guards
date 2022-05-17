import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PageContentBaseService} from '../../page-content-base.service';
import {BookDto} from '../../../../utils/book.dto';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: BookDto = {} as BookDto;

  editedBookId: string = '';
  bookDetailsForm: FormGroup = new FormGroup({})

  constructor(private pageContentBaseService: PageContentBaseService) { }

  onEdit(id: string, title: string){
    this.editedBookId = id;
    this.bookDetailsForm = new FormGroup({
      'title': new FormControl(title),
    });
  }

  onSave(id: string){
    this.pageContentBaseService.renameBook(id, this.bookDetailsForm.controls['title'].value);
    this.editedBookId = '';
  }
}
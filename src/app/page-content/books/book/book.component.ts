import {Component, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PageContentBaseService} from '../../page-content-base.service';
import {BookDto} from '../../../../utils/book.dto';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: BookDto = {} as BookDto;

  @Output()
  isEditMode$: Subject<boolean> = new Subject<boolean>();
  bookDetailsForm: FormGroup = new FormGroup({});

  constructor(private pageContentBaseService: PageContentBaseService) { }

  onEdit(title: string){
    this.isEditMode$.next(true);
    this.bookDetailsForm = new FormGroup({
      'title': new FormControl(title),
    });
  }

  onSave(id: string){
    this.pageContentBaseService.renameBook(id, this.bookDetailsForm.controls['title'].value);
    this.isEditMode$.next(false);
  }
}

import { Injectable } from '@angular/core';
import {BaseElementsDto} from '../../utils/base-elements.dto';
import {Utils} from '../../utils/utils';
import {CourseDto} from '../../utils/course.dto';
import {BookDto} from '../../utils/book.dto';
import {ConferenceDto} from '../../utils/conference.dto';

@Injectable({
  providedIn: 'root'
})
export class PageContentBaseService {

 base: BaseElementsDto[] = Utils.getBase();
 courses: CourseDto[] = Utils.getCourses();
 books: BookDto[] = Utils.getBooks();
 conferences: ConferenceDto[] = Utils.getConferences();

  constructor() { }
}

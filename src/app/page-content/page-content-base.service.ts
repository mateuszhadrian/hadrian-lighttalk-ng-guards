import { Injectable } from '@angular/core';
import {BaseElementsDto} from '../../utils/base-elements.dto';
import {Utils} from '../../utils/utils';
import {CourseDto} from '../../utils/course.dto';
import {BookDto} from '../../utils/book.dto';
import {ConferenceDto} from '../../utils/conference.dto';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageContentBaseService {

 private base$: BehaviorSubject<BaseElementsDto[]> = new BehaviorSubject<BaseElementsDto[]>(Utils.getBase());
 private courses$: BehaviorSubject<CourseDto[]> = new BehaviorSubject<CourseDto[]>(Utils.getCourses());
 private books$: BehaviorSubject<BookDto[]> = new BehaviorSubject<BookDto[]>(Utils.getBooks());
 private conferences$: BehaviorSubject<ConferenceDto[]> = new BehaviorSubject<ConferenceDto[]>(Utils.getConferences());

 getBase$(): Observable<BaseElementsDto[]>{
   return this.base$.asObservable();
  }
 getCourses$(): Observable<CourseDto[]>{
   return this.courses$.asObservable()
 }
 getBooks$(): Observable<BookDto[]>{
   return this.books$.asObservable();
 }
 getConferences$(): Observable<ConferenceDto[]>{
   return this.conferences$.asObservable()
 }

  constructor() { }

  renameBook(bookID: string, newTitle: string){
    let books = this.books$.getValue();
    const bookToRename = books.filter(book => book.id === bookID);
    bookToRename[0].title = newTitle;
    this.books$.next(books)
  }
}

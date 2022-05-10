import {BaseElementsDto} from './base-elements.dto';
import {CourseDto} from './course.dto';
import {BookDto} from './book.dto';
import {ConferenceDto} from './conference.dto';

export class Utils {
 private static BASE: BaseElementsDto[] = [
    {
      title: 'Kursy Video',
      description: 'Najlepsze kursy i tutoriale w formie Video',
      icon: 'movie',
      path: 'courses'
    },
    {
      title: 'Książki',
      description: 'Najczęściej polecane pozycje literatury w zakresie programowania',
      icon: 'library_books',
      path: 'books'
    },
    {
      title: 'Konferencje',
      description: 'Najbardziej aktualne konferencje programistyczne w formie video i audio',
      icon: 'record_voice_over',
      path: 'conferences'
    },
  ];

 private static COURSES: CourseDto[] = [
   {
     title: 'Angular 13. Fundamentals',
     author: 'Maximilian Schwarzmuller',
     scope: 'Angular'
   },
   {
     title: 'JavaScript. The hard parts',
     author: 'Will Sentance',
     scope: 'JavaScript'
   },
   {
     title: 'Everything you should know about RxJS',
     author: 'Matthew Podwysocki',
     scope: 'RxJS'
   }
 ];

 private static BOOKS: BookDto[] = [
   {
     title: 'JavaScript. The Definitive Guide',
     author: 'David Flanagan',
     scope: 'JavaScript'
   },
   {
     title: 'TypeScript 4. Design Patterns and Best Practices',
     author: 'Theo Despoudis',
     scope: 'TypeScript'
   },
   {
     title: 'Clean Code',
     author: 'Robert C. Martin',
     scope: 'Programming'
   },
 ];

 private static CONFERENCES: ConferenceDto[] = [
   {
     title: 'Front Conference Zurich',
     speaker: 'Vitaly Friedman',
     scope: 'Frontend Technologies'
   },
   {
     title: 'CSS day',
     speaker: 'Rachel Andrew',
     scope: 'CSS'
   },
   {
     title: 'International Conference on Software Programming ICSP',
     speaker: 'Miško Hevery',
     scope: 'Programming'
   },

 ]

  static getBase(): BaseElementsDto[] {
   return Utils.BASE
  }

  static getCourses(): CourseDto[] {
   return Utils.COURSES
  }

  static getBooks(): BookDto[] {
   return Utils.BOOKS
  }

  static getConferences() : ConferenceDto[] {
   return Utils.CONFERENCES
  }

}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CourseDto} from '../../../utils/course.dto';
import {PageContentBaseService} from '../page-content-base.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<CourseDto[]> {
  courses: CourseDto[] = []; // stworzone na potrzeby tego obejścia
  constructor(private pageContentBaseService: PageContentBaseService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseDto[]> {
    // return this.pageContentBaseService.getCourses$(); // to z jakiegoś powodu nie działa (nie wyswietlaja sie kursy) i trzeba subskrybować i znowu wrapować w observable'a przez of() jak poniżej
    this.pageContentBaseService.getCourses$().subscribe(courses => {
      this.courses = courses
    })
    return of(this.courses); // teraz działa wyświetlaja sie kursy, ale to bez sensu i w prawdziwej aplikacji by nie zadzialalo bo zwrociloby false, czyli w sumie nie wpisucilo na route
  }

}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CourseDto} from '../../../utils/course.dto';
import {PageContentBaseService} from '../page-content-base.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<CourseDto[]> {
  constructor(private pageContentBaseService: PageContentBaseService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseDto[]> {
    return of(this.pageContentBaseService.courses);
  }
}

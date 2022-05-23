import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild, CanLoad, Route,
  Router,
  RouterStateSnapshot, UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable, of, switchMap, take} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getIsAuthenticated$()
      .pipe(take(1),
        switchMap((isAuthenticated) => {
        if(isAuthenticated) {
          return of(true);
        } else {
          return of(this.router.createUrlTree(['/auth']));
        }
    }));
  };

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state)
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getIsAuthenticated$()
      .pipe(
        take(1),
        switchMap((isAuthenticated) => {
        if(isAuthenticated) {
          return of(true);
        } else {
          return of(this.router.createUrlTree(['/auth']));
        }
      }));
  }
}

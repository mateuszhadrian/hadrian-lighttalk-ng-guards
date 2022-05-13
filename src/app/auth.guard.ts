import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.isAuthenticated$
      .pipe(take(1))
      .subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    if (this.isAuthenticated) {
      return true
    } else {
     return this.router.createUrlTree(['/auth'])
    }
  }

}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated$ = new BehaviorSubject(false);

  getIsAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  login(){
    this.isAuthenticated$.next(true)
  }

  logout(){
    if (this.isAuthenticated$.getValue()){
      this.isAuthenticated$.next(false)
    }
  }
}

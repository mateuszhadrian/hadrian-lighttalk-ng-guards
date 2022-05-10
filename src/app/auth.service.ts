import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated$ = new BehaviorSubject(false)

  login(){
    this.isAuthenticated$.next(true)
  }

  logout(){
    this.isAuthenticated$.next(false)
  }
}


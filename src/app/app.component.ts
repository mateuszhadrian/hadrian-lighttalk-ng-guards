import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuthenticated$: Observable<boolean> = this.authService.getIsAuthenticated$();

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

}

import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.scss']
})
export class PageAuthComponent {

  constructor(
    private authService: AuthService,
    private router: Router
              ) {}

  onLogin(){
    this.authService.login();
    this.router.navigate(['/base'])
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medical';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      //console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  radio = new FormControl('');

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/patient');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  }

}

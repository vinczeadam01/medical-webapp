import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  radio = new FormControl('');

  isInvalidEmailOrPassword = false;


  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    if (!this.email.hasError("required") && !this.password.hasError("required")) {
      this.isInvalidEmailOrPassword = false;
      this.loading = true;
      this.authService.login(this.email.value, this.password.value).then(cred => {
        //console.log(cred);
        this.loading = false;
        this.router.navigateByUrl('/patient');
      }).catch(error => {
        console.error(error, this.email.hasError("required"), this.password.hasError("required"));
        this.isInvalidEmailOrPassword = true;
        this.loading = false;
      });
    }
  }


}

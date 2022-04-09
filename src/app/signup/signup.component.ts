import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  radio = new FormControl('');
  firstname = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('');
  taj = new FormControl('');
  password = new FormControl('');
  rePassword = new FormControl('');

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignup() {
    this.loading = true;
    if(this.password.value === this.rePassword.value) {
      this.authService.signup(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/patient');
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
      });
    }
    else {
      //TODO: form error passwords not match
    }
    
  }

}

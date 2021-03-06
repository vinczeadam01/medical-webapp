import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../shared/models/doctor';
import { Patient } from '../shared/models/patient';
import { AuthService } from '../shared/services/auth.service';
import { DoctorService } from '../shared/services/doctor.service';
import { PatientService } from '../shared/services/patient.service';

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
  isPasswordsNotMatch = false;
  emailIsAlreadyExists = false;
  isWeakPassword = false;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  onSignup() {
    this.loading = true;
    if(this.password.value === this.rePassword.value) {
      this.isPasswordsNotMatch = false;
      this.emailIsAlreadyExists = false;
      this.isWeakPassword = false;
      this.authService.signup(this.email.value, this.password.value).then(cred => {
        //console.log(cred);
        localStorage.setItem('user', JSON.stringify(cred));
        
        if(this.radio.value != "doctor") {
          this.registerPatient(cred.user?.uid as string);
          
        }
        else {
          this.registerDoctor(cred.user?.uid as string);
        }
        this.loading = false;
      }).catch(error => {
        console.error(error.code);
        if(error.code === "auth/email-already-in-use") {
          this.emailIsAlreadyExists = true;
        }
        else if(error.code === "auth/weak-password") {
          this.isWeakPassword = true;
        }
        this.loading = false;
      });
    }
    else {
      this.isPasswordsNotMatch = true;
      this.loading = false;
    }
    
  }
  registerDoctor(id: string) {
    const tmp: Doctor = {
      id: id,
      firstname: this.firstname.value, 
      lastname: this.lastname.value,
      email: this.email.value,
    }
    this.doctorService.create(tmp).then(_ => {
      localStorage.setItem('doctor', JSON.stringify(tmp));
      this.router.navigateByUrl('/doctor');
    })
    .catch(error => {
      console.log(error);
    });
  }

  registerPatient(id: string) {
    const tmp: Patient = {
      id: id, 
      firstname: this.firstname.value, 
      lastname: this.lastname.value,
      email: this.email.value,
      taj: this.taj.value
    };
      
    this.patientService.create(tmp).then(_ => {
      localStorage.setItem('patient', JSON.stringify(tmp));
      this.router.navigateByUrl('/patient');
    }).catch(error => {
          console.log(error);
        });
  }

}

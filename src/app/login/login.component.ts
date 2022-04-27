import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { PatientService } from '../shared/services/patient.service';
import { DoctorService } from '../shared/services/doctor.service';
import { Patient } from '../shared/models/patient'
import { Doctor } from '../shared/models/doctor'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  patient: boolean = true;

  isInvalidEmailOrPassword = false;


  loading: boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  switchDoctor(event: string) {
    if(event === "patient") {
      this.patient = true;
    }
    else {
      this.patient = false;
    }
  }

  login() {
    if (!this.email.hasError("required") && !this.password.hasError("required")) {
      this.isInvalidEmailOrPassword = false;
      this.loading = true;
      this.authService.login(this.email.value, this.password.value).then(cred => {
        localStorage.setItem('user', JSON.stringify(cred));
        this.loading = false;
        if(this.patient) {
          this.loginAsPatient(cred.user?.uid as string);
        }
        else {
          this.loginAsDoctor(cred.user?.uid as string);
        }
      }).catch(error => {
        console.error(error, this.email.hasError("required"), this.password.hasError("required"));
        this.isInvalidEmailOrPassword = true;
        this.loading = false;
      });
    }
  }

  loginAsDoctor(id: string) {
    this.doctorService.getById(id).subscribe(doctor => {
      if(doctor == undefined) {
        console.error("Ez a fiók betegként van regisztrálva");
        return;
      }
      
      localStorage.setItem('doctor', JSON.stringify(doctor));
    });
    this.router.navigateByUrl("/doctor");
  }

  loginAsPatient(id: string) { 
    this.patientService.getById(id).subscribe(patient => {
      localStorage.setItem('patient', JSON.stringify(patient));
    });
    
    this.router.navigateByUrl("/patient");
  }



}

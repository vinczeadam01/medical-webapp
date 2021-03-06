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
  errorMessage: string = "";


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
      this.errorMessage = "";
      this.loading = true;
      this.authService.login(this.email.value, this.password.value).then(cred => {
        localStorage.setItem('user', JSON.stringify(cred));
        this.loading = false;
        if(this.patient) {
          this.loginAsPatient(cred.user?.uid as string);
        }
        else {
          this.loginAsDoctor(cred.user?.uid as string, cred);
        }
      }).catch(error => {
        console.error(error, this.email.hasError("required"), this.password.hasError("required"));
        this.isInvalidEmailOrPassword = true;
        this.errorMessage = "Hibás email vagy jelszó!";
        this.loading = false;
      });
    }
  }

  loginAsDoctor(id: string, cred: any) {
    this.doctorService.getById(id).subscribe(doctor => {
      if(doctor == undefined) {
        console.error("Ez a fiók betegként van regisztrálva");
        this.errorMessage = "Ez a fiók betegként van regisztrálva!"
        this.loading = false;
      }
      else {
        localStorage.setItem('doctor', JSON.stringify(doctor));
        this.router.navigateByUrl("/doctor");
        
      }
    });
    
  }

  loginAsPatient(id: string) { 
    this.patientService.getById(id).subscribe(patient => {
      if(patient == undefined) {
        console.error("Ez a fiók orvosként van regisztrálva");
        this.errorMessage = "Ez a fiók orvosként van regisztrálva!"
        this.loading = false;
      }
      else {
        localStorage.setItem('patient', JSON.stringify(patient));
        this.router.navigateByUrl("/patient");
        
      }
    });
    
  }




}

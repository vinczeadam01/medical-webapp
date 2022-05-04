import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Patient } from '../shared/models/patient';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {

  patient: Patient;

  links = [
    {name: "Előzmények", icon: "table_rows", url: "/patient/history"},
    {name: "Mérés hozzáadása", icon: "add", url: "/patient/add"},
    {name: "Üzenet", icon: "email", url: "/patient/message"},
    {name: "Elemzések", icon: "analytics", url: "/patient/analytics"},
    
  ];
  page = "/doctor/patients";

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }
  constructor(private router: Router, private authService: AuthService) {
    this.page = this.router.url;
    this.patient = JSON.parse(localStorage.getItem('patient') as string);
  }

  changePage(selectedPage: string) {
    return this.router.navigateByUrl(selectedPage);
  }

  async onLogout() {
    this.authService.logout().then(() => {
      localStorage.setItem('user', "null");
      localStorage.setItem('patient', "null");
      this.changePage("/login");
    }). catch(error => {
      console.error(error);
    })
  }

}

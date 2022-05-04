import { Component } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Doctor } from '../shared/models/doctor';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  doctor: Doctor;

  links = [
    {name: "Eredmények", icon: "table_rows", url: "/doctor/results"},
    {name: "Beteglista", icon: "person", url: "/doctor/patients"},
    {name: "Üzenetek", icon: "mail", url: "/doctor/message"}
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
    this.doctor = JSON.parse(localStorage.getItem('doctor') as string);
    console.log(this.doctor);
    
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  async onLogout() {
    this.authService.logout().then(() => {
      localStorage.clear();
      this.changePage("/login");
    }). catch(error => {
      console.error(error);
    })
  }

}

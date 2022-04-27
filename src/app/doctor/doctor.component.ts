import { Component } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

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
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  async onLogout() {
    this.authService.logout().then(() => {
      localStorage.setItem('user', "null");
      localStorage.setItem('doctor', "null");
      this.changePage("/login");
    }). catch(error => {
      console.error(error);
    })
  }

}

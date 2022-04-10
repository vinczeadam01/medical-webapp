import { Component } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    this.page = this.router.url;
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  onLogout() {
    this.changePage("/login");
  }

}

import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {

  links = [
    {name: "Előzmények", icon: "table_rows", url: "/patient/table"},
    {name: "Mérés hozzáadása", icon: "add", url: "/patient/add"},
    {name: "Üzenet", icon: "email", url: "/patient/message"},
    {name: "Beállítások", icon: "settings", url: "/patient/settings"},
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

  logout() {
    this.changePage("/login")
  }

}

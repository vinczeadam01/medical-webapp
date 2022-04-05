import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  links = [{name: "Előzmények", icon: "table_rows", url: "/login"}]

  constructor() { }

  ngOnInit(): void {
  }

}

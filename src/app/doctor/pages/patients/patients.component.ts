import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  // TABLE
  displayedColumns: string[] = ['name', 'email', 'taj'];
  dataSource:Patient[] = [];

  @ViewChild(MatTable) table?: MatTable<Patient>;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe(patients => {
      this.dataSource = [];
      for(const patient of patients) {
        this.dataSource.push(patient);
      }

      if(this.table) {
        this.table.renderRows();
      }
    });
  }

}

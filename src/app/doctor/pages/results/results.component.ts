import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  patientId = new FormControl();
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getAll().forEach(patients => {
      this.patients = [];
      for(const patient of patients) {
        this.patients.push(patient)
      }
    });
  }

}

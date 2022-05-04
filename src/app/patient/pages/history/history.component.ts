import { Component, OnInit } from '@angular/core';
import { BloodPressure } from 'src/app/shared/models/bloodPressure';
import { Patient } from 'src/app/shared/models/patient';
import { MeasureService } from 'src/app/shared/services/measure.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  patient: Patient;

  constructor(private measureService: MeasureService) {
    this.patient = JSON.parse(localStorage.getItem('patient') as string);
    console.log(this.patient.id);
   }

  ngOnInit(): void {
  }

}

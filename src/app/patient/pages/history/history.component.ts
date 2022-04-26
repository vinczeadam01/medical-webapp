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

  measurementsData: BloodPressure[] =[]
  patient: Patient;

  constructor(private measureService: MeasureService) {
    this.patient = JSON.parse(localStorage.getItem('patient') as string);
   }

  ngOnInit(): void {
    this.measureService.getByUserId(this.patient.id).subscribe(datas => {
      for(let data of datas) {
          this.measurementsData?.push(data);
      }
    });

    console.log(this.measurementsData);
    
    
  }

}

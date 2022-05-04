import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodPressure } from 'src/app/shared/models/bloodPressure';
import { Patient } from 'src/app/shared/models/patient';
import { MeasureService } from 'src/app/shared/services/measure.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  date = new FormControl('');
  time = new FormControl('');
  sys = new FormControl('');
  dia = new FormControl('');
  pulse = new FormControl('');
  patient: Patient;



  constructor(private measureService: MeasureService, private router: Router) {
    this.patient = JSON.parse(localStorage.getItem('patient') as string);
   }

  ngOnInit(): void {
    let currentDate = new Date();
    this.date.setValue(currentDate.toISOString().split('T')[0]);
    let currentTime = currentDate.toTimeString().split(' ')[0].split(':')
    this.time.setValue(currentTime[0] + ":" + currentTime[1]);
  }

  onAdd(): void {
    const measure: BloodPressure = {
      id: "",
      uid: this.patient.id,
      date: Timestamp.fromDate(new Date(this.date.value+"T"+this.time.value+":00.000+02:00")),
      sys: this.sys.value,
      dia: this.dia.value,
      pulse: this.pulse.value,
      rate: this.calcRate(this.sys.value, this.dia.value)
    }    

    this.measureService.create(measure);
    this.router.navigateByUrl("/patient/history")
  }

  calcRate(sys: number, dia: number): number {
    if(sys < 90 && dia < 60)
      return 0;
    if(sys < 120 && dia < 80)
      return 1;
    if(sys < 140 && dia < 90)
      return 2;
    return 3;
  }

}

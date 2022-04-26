import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  feel = new FormControl('');
  patient: Patient;



  constructor(private measureService: MeasureService) {
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
      date: this.date.value + " " + this.time.value,
      sys: this.sys.value,
      dia: this.dia.value,
      feel: this.feel.value
    }
    console.log(measure);
    

    this.measureService.create(measure);
  }

}

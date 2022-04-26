import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { MeasureService } from 'src/app/shared/services/measure.service';
import * as CanvasJS from '../../../../assets/canvasjs.min'

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.scss']
})
export class AnalitycsComponent implements OnInit {

  patient: Patient;

  constructor(private measurementService: MeasureService) {
    this.patient = JSON.parse(localStorage.getItem('patient') as string);
   }

  ngOnInit(): void {
    let dataPoints: any = [];

    this.measurementService.getByUserId(this.patient.id).subscribe(datas => {
      for(const data of datas) {
        dataPoints.push({x: data.dia, y: data.sys});
      }
    })

    console.log(dataPoints);
    
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Vérnyomás diagram"
      },
      data: [
      {
        type: "line",                
        dataPoints: dataPoints
      }]
    });
      
    chart.render();
      }

}

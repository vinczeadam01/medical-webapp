import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { MeasureService } from 'src/app/shared/services/measure.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.scss']
})
export class AnalitycsComponent implements OnInit {

  patient: Patient;
  lowData: any[] = [];
  normalData: any[] = [];
  mediumData: any[] = [];
  highData: any[] = [];
  pointRadiusValue = 8; //default radius of points in chart

  constructor(private measurementService: MeasureService) {
    this.patient = JSON.parse(localStorage.getItem('patient') as string);
   }

  ngOnInit(): void {
    if(window.innerWidth < 500) {
      this.pointRadiusValue = 5;
    }

    this.measurementService.getByUserId(this.patient.id).subscribe(datas => {
      for(const data of datas) {
        switch(data.rate) {
          case 0:
            this.lowData.push({x: data.dia, y: data.sys});
            break;
          case 1:
            this.normalData.push({x: data.dia, y: data.sys});
            break;
          case 2:
            this.mediumData.push({x: data.dia, y: data.sys});
            break;
          case 3:
            this.highData.push({x: data.dia, y: data.sys});
            break;
        }  
      }

      //INIT points
      this.scatterChartData = {
        datasets: [
          //low data points
          {
            data: [...this.lowData],
            label: 'Alacsony',
            backgroundColor: "#FEEB99",
            pointRadius: this.pointRadiusValue,
          },
          //normal data points
          {
            data: [...this.normalData],
            label: 'Normális',
            backgroundColor: "#C1DCBA",
            pointRadius: this.pointRadiusValue,
          },
          //medium data points
          {
            data: [...this.mediumData],
            label: 'Közepes',
            backgroundColor: "#EDC773",
            pointRadius: this.pointRadiusValue,
          },
          //high data points
          {
            data: [...this.highData],
            label: 'Magas',
            backgroundColor: "#EDAA98",
            pointRadius: this.pointRadiusValue,
          },
        ]
      };
    });
  }

  // scatter
  public scatterChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  
  public scatterChartData?: ChartData<'scatter'>;
  public scatterChartType: ChartType = 'scatter';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

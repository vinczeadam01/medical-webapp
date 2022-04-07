import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodPressure } from '../models/bloodPressure';

@Component({
  selector: 'app-mesurement-table',
  templateUrl: './mesurement-table.component.html',
  styleUrls: ['./mesurement-table.component.scss']
})
export class MesurementTableComponent implements OnInit {

  TABLE_DATA: BloodPressure[] = [
    {id: 1, sys: 124, dia: 92, date: "2022-04-06 12:00", feel: 5},
    {id: 2, sys: 124, dia: 92, date: "2022-04-06 12:00", feel: 5},
    {id: 3, sys: 124, dia: 92, date: "2022-04-06 12:00", feel: 5},
  
  ];

  displayedColumns: string[] = ['date', 'sys', 'dia', 'feel', 'action'];
  dataSource = new MatTableDataSource(this.TABLE_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  updateRowData(row_obj: BloodPressure){
    this.TABLE_DATA = this.TABLE_DATA.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.sys = row_obj.sys;
        value.dia = row_obj.dia;
        value.feel = row_obj.feel;
      }
      return true;
    });
  }
  deleteRowData(row_obj: BloodPressure){
    this.TABLE_DATA = this.TABLE_DATA.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}

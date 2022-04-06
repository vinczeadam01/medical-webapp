import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodPressure } from '../models/bloodPressure';

@Component({
  selector: 'app-mesurement-table',
  templateUrl: './mesurement-table.component.html',
  styleUrls: ['./mesurement-table.component.scss']
})
export class MesurementTableComponent implements OnInit {

  TABLE_DATA: BloodPressure[] = [{sys: 124, dia: 92, date: "2022-04-06 12:00", feel: 5}];

  displayedColumns: string[] = ['date', 'sys', 'dia', 'feel'];
  dataSource = new MatTableDataSource(this.TABLE_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

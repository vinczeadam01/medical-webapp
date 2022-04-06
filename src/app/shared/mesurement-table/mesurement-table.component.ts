import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodPressure } from '../models/bloodPressure';

@Component({
  selector: 'app-mesurement-table',
  templateUrl: './mesurement-table.component.html',
  styleUrls: ['./mesurement-table.component.scss']
})
export class MesurementTableComponent implements OnInit {

  TABLE_DATA: BloodPressure[] = [{sys: 124, dia: 92, date: Date.now.toString(), feel: 5}];

  displayedColumns: string[] = ['Dátum', 'SYS', 'DIA', 'Közérzet'];
  dataSource = new MatTableDataSource(this.TABLE_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

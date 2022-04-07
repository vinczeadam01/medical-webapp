import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(action: string, data: BloodPressure): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: BloodPressure,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

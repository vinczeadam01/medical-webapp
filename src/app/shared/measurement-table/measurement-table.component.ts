import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BloodPressure } from '../models/bloodPressure';

@Component({
  selector: 'app-measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class measurementTableComponent implements OnInit {

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


  openDialog(actione: string, dataBloodPressure: BloodPressure): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { data: dataBloodPressure, action: actione },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styles: ['mat-form-field {display: block; size: 80%; margin: 0 10px 0 10px}']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { data: BloodPressure, action: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

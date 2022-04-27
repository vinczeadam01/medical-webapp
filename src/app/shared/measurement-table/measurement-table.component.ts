import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BloodPressure } from '../models/bloodPressure';
import { MeasureService } from '../services/measure.service';

@Component({
  selector: 'app-measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class measurementTableComponent implements OnInit, OnChanges {

  @Input() id?: String;

  displayedColumns: string[] = ['date', 'sys', 'dia', 'feel', 'action'];
  dataSource: BloodPressure[] = []

  @ViewChild(MatTable) table?: MatTable<BloodPressure>;

  constructor(public dialog: MatDialog, private measureService: MeasureService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.buildTable();
  }


  ngOnInit(): void {
    this.dataSource = []
    this.buildTable();
  }

  buildTable(): void {
    if(this.id) {
      this.measureService.getByUserId(this.id as string).subscribe(datas => {
        this.dataSource=[]
        for(const data of datas) {
          this.dataSource.push(data);
          console.log(data);
          
        }
        if(this.table)
        this.table.renderRows();
      });  
    }
  }




  openDialog(actione: string, dataBloodPressure: BloodPressure): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { data: dataBloodPressure, action: actione },
    });

    dialogRef.afterClosed().subscribe(_ => {
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

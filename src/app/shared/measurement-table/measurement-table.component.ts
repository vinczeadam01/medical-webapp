import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
      //console.log('The dialog was closed');
      this.buildTable();
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
    @Inject(MAT_DIALOG_DATA) public data: { data: BloodPressure, action: string },
    private measureService: MeasureService
  ) {}

  uDate: String = "";
  uDia: String = "";
  uSys: String = "";
  uFeel: String = "";

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.data.data.rate = this.calcRate(this.data.data.sys, this.data.data.dia);
    this.measureService.update(this.data.data);
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

  onDelete(): void {
    this.measureService.delete(this.data.data.id);
  }
}

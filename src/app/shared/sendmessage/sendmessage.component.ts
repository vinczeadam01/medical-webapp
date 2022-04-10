import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Message } from '../models/message';

const MESSAGES_DATA: Message[] = [
  {from: 'doctor1', to: 'vinczeadam', date: "2022-03-21", message: 'Kedves Ádám! Pihenjen sokat!'},
  {from: 'doctor1', to: 'vinczeadam', date: "2022-03-21", message: 'Kedves Ádám! Pihenjen sokat!'},
  {from: 'doctor1', to: 'vinczeadam', date: "2022-03-21", message: 'Kedves Ádám! Pihenjen sokat!'}
]

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {


  //@Input() from?: string;
  //@Input() to?: string;
  

  displayedColumns: string[] = ['from', 'to', 'date', 'message'];
  dataSource = [...MESSAGES_DATA];

  ngOnInit(): void {
  }

  @ViewChild(MatTable) table?: MatTable<Message>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * MESSAGES_DATA.length);
    this.dataSource.push(MESSAGES_DATA[randomElementIndex]);
    if(this.table)
      this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    if(this.table)
      this.table.renderRows();
  }

}

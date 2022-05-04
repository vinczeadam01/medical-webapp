import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Doctor } from '../models/doctor';
import { Message } from '../models/message';
import { Patient } from '../models/patient';
import { DoctorService } from '../services/doctor.service';
import { MessageService } from '../services/message.service';
import { PatientService } from '../services/patient.service';


@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {


  @Input() userId?: string;
  @Input() userName?: string;
  @Input() role?: string;

  //FORM
  contacts: any[] = [];
  message = new FormControl('');
  to = new FormControl('');
  isSendSuccess = false;
  
  // TABLE
  displayedColumns: string[] = ['from', 'to', 'date', 'message'];
  dataSource:Message[] = [];

  @ViewChild(MatTable) table?: MatTable<Message>;

  constructor(private messageService: MessageService, private doctorService: DoctorService, private patientService: PatientService) {}

  ngOnInit(): void {

    //Contacts list init
    if(this.role === "patient") {
      this.doctorService.getAll().subscribe(users => {
        this.contacts = [];
        for(const user of users) {
          this.contacts.push(user);
        }
      });
    }
    else {
      this.patientService.getAll().subscribe(users => {
        this.contacts = [];
        for(const user of users) {
          this.contacts.push(user);
        }
      });
    }

    //Inbox init
    this.messageService.getReceivedByUserId(this.userId as string).subscribe(messages => {
      this.dataSource = [];
      for(const message of messages) {
        this.dataSource.push(message);
        console.log(message.date.toDate().toISOString());
        
        
      }

      if(this.table) {
        this.table.renderRows();
      }
    });
  }

  send(): void {
    let now = new Date();
    const message: Message = {
      id: "",
      from: this.userId as string,
      fromName: this.userName as string,
      to: this.to.value.id,
      toName: this.to.value.lastname + " " + this.to.value.firstname,
      message: this.message.value,
      date: Timestamp.now()
    }
    
    
    this.messageService.create(message).then(_ => {
      this.isSendSuccess = true;
      this.message.setValue("");
    })
  }
  


}

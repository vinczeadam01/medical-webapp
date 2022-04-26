import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  patient: Patient;

  constructor() {
    this.patient = JSON.parse(localStorage.getItem('patient') as string); 
  }

  ngOnInit(): void {
  }

}

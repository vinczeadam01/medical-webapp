import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/models/doctor';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  doctor: Doctor;

  constructor() { 
    this.doctor = JSON.parse(localStorage.getItem('doctor') as string); 
  }

  ngOnInit(): void {
  }

}

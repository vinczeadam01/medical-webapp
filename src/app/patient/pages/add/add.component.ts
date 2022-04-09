import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  date = new FormControl('');
  time = new FormControl('');
  sys = new FormControl('');
  dia = new FormControl('');
  feel = new FormControl('');



  constructor() { }

  ngOnInit(): void {
    let currentDate = new Date();
    this.date.setValue(currentDate.toISOString().split('T')[0]);
    let currentTime = currentDate.toTimeString().split(' ')[0].split(':')
    this.time.setValue(currentTime[0] + ":" + currentTime[1]);
  }

}

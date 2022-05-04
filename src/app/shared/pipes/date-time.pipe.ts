import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: Timestamp, ...args: unknown[]): unknown {
    let date: Date = value.toDate();
    let tzoffset = date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() - tzoffset);
    let dateStr = date.toISOString().split("T")[0];
    let timeFullStr = date.toISOString().split("T")[1].replace("Z",'').split(":");
    let timeStr = timeFullStr[0] + ":" + timeFullStr[1]
    return dateStr + " " + timeStr;
  }

}

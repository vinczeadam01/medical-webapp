import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'onlyDate'
})
export class OnlydatePipe implements PipeTransform {

  transform(value: Timestamp, ...args: unknown[]): unknown {
    let date: Date = value.toDate();
    let tzoffset = (new Date(date)).getTimezoneOffset() * 60000;
    let localISOTime = (new Date(Date.now() - tzoffset)).toISOString().split("T")[0];
    return localISOTime;
  }

}

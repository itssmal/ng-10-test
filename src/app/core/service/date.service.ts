import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';
import {Week} from '../interfaces/calendar.interface';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  public changeWeek(direction: number): void {
    const val = this.date.value.add(direction, 'w');
    this.date.next(val);
  }

  public getWeek(now: moment.Moment): Week {
    const startDay = now.clone().startOf('week');
    const endDay = now.clone().endOf('week');

    const date = startDay.clone().subtract(1, 'day');

    const week: Week = {
      start: startDay,
      end: endDay,
      days: []
    };

    while (date.isBefore(endDay, 'day')) {
      week.days.push({
        value: date.add(1, 'day').clone(),
        selected: false
      });
    }
    return week;
  }


}



import { Component, OnInit } from '@angular/core';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public arrowLeft = faAngleLeft;
  public arrowRight = faAngleRight;
  public month = {
    name: 'October',
    shortName: 'Oct',
    days: [
      {
        date: 11,
        day: 'Sun'
      },
      {
        date: 12,
        day: 'Mon'
      },
      {
        date: 13,
        day: 'Tue'
      },
      {
        date: 14,
        day: 'Wed'
      },
      {
        date: 15,
        day: 'Thu'
      },
      {
        date: 16,
        day: 'Fri'
      },
      {
        date: 17,
        day: 'Sat'
      },
    ]
  };
  selectedDate = 6

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 31; i++) {
      this.month.days.push(i);
    }
  }

  selectDay(date: number) {
    this.selectedDate = date
  }
}

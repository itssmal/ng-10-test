import { Component, OnInit } from '@angular/core';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {DateService} from '../../../core/service/date.service';
import * as moment from 'moment';
import {Day, Week} from '../../../core/interfaces/calendar.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public arrowLeft = faAngleLeft;
  public arrowRight = faAngleRight;
  public week = {} as Week;

  constructor(public dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.initCalendar.bind(this));
  }

  private initCalendar(now: moment.Moment): void {
    this.week = this.dateService.getWeek(now);
    this.week.days[5].selected = true; // setting 5th day of week selected by default
  }

  public changeWeek(direction: number): void {
    this.dateService.changeWeek(direction);
  }

  public selectDay(day: Day): void {
    this.week.days.map(el => {
      el === day ? (el.selected = true) : el.selected = false;
    });
  }
}

import * as moment from 'moment';

export interface Week {
  start: moment.Moment;
  end: moment.Moment;
  days: Day[];
}

export interface Day {
  value: moment.Moment;
  selected: boolean;
}

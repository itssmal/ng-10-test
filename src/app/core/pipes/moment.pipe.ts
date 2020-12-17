import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {

  transform(moment: moment.Moment,format = ''): string {
    return moment.format(format);
  }

}
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(entity: { startDate: Date; endDate?: Date }) {
    const start = moment(entity.startDate);
    const end = !!entity?.endDate ? moment(entity?.endDate) : moment();

    const duration = moment.duration(end.diff(start));

    const y = duration.years();
    const m = duration.months();
    const d = duration.days();
    const year = y !== 0 ? (y === 1 ? '1 Year' : `${y} Years`) : '';
    const month = m !== 0 ? (m === 1 ? '1 Month' : `${m} Months`) : '';
    const days = d !== 0 ? (d === 1 ? '1 Day' : `${d} Days`) : '';
    const str = [year, month, days].filter((i) => i !== '').join(', ');
    return str;
  }
}

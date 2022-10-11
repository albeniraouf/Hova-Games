import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalDate',
})
export class OrdinalDatePipe implements PipeTransform {
  transform(value: Date): unknown {
    const MONTHS = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = value.getDate();
    const year = value.getFullYear();
    const month = MONTHS[value.getUTCMonth()];
    let ordinal = 'th';
    switch (day) {
      case 1:
      case 21:
      case 31:
        ordinal = 'st';
        break;
      case 2:
      case 22:
        ordinal = 'nd';
        break;
      case 3:
      case 23:
        ordinal = 'rd';
        break;
    }
    return `${month} ${day}${ordinal}, ${year}`;
  }
}

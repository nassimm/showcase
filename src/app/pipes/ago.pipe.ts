import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(pastDate: any, args?: any): any {
  	const now = moment();
    return moment(pastDate).from(now);
  }

}

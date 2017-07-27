import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	const dura = moment.duration(value);
  	let ret = "";
  	ret+=(Number(dura.hours()))?dura.hours()+" hr ":""
  	ret+=(Number(dura.minutes()))?dura.minutes()+" min ":""
  	ret+=(Number(dura.seconds()))?dura.seconds()+" sec ":""
    return  ret;
  }


}

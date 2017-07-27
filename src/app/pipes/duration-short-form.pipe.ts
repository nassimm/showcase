import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'durationShortForm'
})
export class DurationShortFormPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		const dura = moment.duration(value, 'seconds').format("hh:mm:ss", { trim: false });
		return dura.indexOf("00:")===0			
		?dura.split(/:(.+)/)[1]
		:dura
	}

}

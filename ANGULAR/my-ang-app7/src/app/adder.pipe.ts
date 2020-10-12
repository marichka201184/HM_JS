import {Pipe, PipeTransform} from '@angular/core';
import {User} from './models/user';

@Pipe({
  name: 'adder'
})
export class AdderPipe implements PipeTransform {

  transform(value: any[],name: string, ...args: string[]): string {
    const res = name + value;
    return res;
  }

}
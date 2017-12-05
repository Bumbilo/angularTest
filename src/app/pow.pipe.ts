import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {

  transform(value: any, powNumber: number = 1, simb:string = '') {
    return simb + Math.pow(value, powNumber);
  }

}

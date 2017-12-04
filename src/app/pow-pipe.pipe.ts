import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powPipe'
})
export class PowPipePipe implements PipeTransform {
  transform(value: any, powNumber: number = 1, str:string): any {
    return str + Math.pow(value, powNumber);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, isUppercase: boolean = true): string {
    if (isUppercase) {
      return value.toUpperCase();
    } else {
      return value;
    }
  }
}

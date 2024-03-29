import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly',
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Can fly' : 'Can not fly';
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sells.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: string = ''): Hero[] {
    if (sortBy === 'name')
      return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
    else if (sortBy === 'fly')
      return heroes.sort((a, b) => (a.fly > b.fly ? 1 : -1));
    else if (sortBy === 'color')
      return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
    else return heroes;
  }
}

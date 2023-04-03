import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sells.interface';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})
export class SortingComponent implements OnInit {
  isUppercase: boolean = true;
  heroes: Hero[] = [
    {
      name: 'Batman',
      fly: true,
      color: Color.black,
    },
    {
      name: 'Superman',
      fly: true,
      color: Color.red,
    },
    {
      name: 'Hulk',
      fly: false,
      color: Color.green,
    },
  ];
  sortBy: string = '';

  constructor() {}

  ngOnInit(): void {}

  switchCase() {
    this.isUppercase = !this.isUppercase;
  }

  changeSort(sortBy: string) {
    this.sortBy = sortBy;
    console.log(sortBy);
  }
}

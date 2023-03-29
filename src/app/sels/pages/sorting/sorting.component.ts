import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})
export class SortingComponent implements OnInit {
  isUppercase: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  switchCase() {
    this.isUppercase = !this.isUppercase;
  }
}

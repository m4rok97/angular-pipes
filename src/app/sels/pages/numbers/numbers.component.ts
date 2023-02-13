import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  totalSells : number   = 2343.123123;
  percent : number = 0.4554;

  constructor() { }

  ngOnInit(): void {
  }

}

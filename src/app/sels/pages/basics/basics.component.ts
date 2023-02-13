import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {


  nameLower: string = 'john doe';
  nameUpper: string = 'JOHN DOE';
  nameComplete: string = 'jOhN dOe';

  date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}

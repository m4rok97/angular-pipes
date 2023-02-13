import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent implements OnInit {

  public name: string = 'John Doe';
  public gender: string = 'male';

  public nameMap = {
    'male': 'Mr.',
    'female': 'Mrs.'
  }

  public clients = ['John Doe', 'Jane Doe', 'Peter Parker'];

  public pluralMap = {
    '=0': 'no clients',
    '=1': 'one client',
    'other': '# clients'
  };

  public person = {
    name: 'John Doe',
    age: 30,
    address: 'New York, USA'
  }

  myObservable = interval(1000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data is here!');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }


  changeGender(event: any) {
    this.gender = this.gender === 'male' ? this.gender = 'female' : 'male';
  }

  deletePerson(index: any) {
    this.clients.pop();
  }
}

import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = 'John Doe';
  value: number = 1000;
  obj = {
    name: 'John Doe',
  };

  showName(): void {
    alert(this.name);
  }

  constructor(private primeConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeConfig.ripple = true;
  }
}

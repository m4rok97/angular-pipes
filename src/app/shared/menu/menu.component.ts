import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = this.items = [
      {
        label: 'Pipes in Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          { label: 'Numbers', icon: 'pi pi-dollar', routerLink: 'numbers' },
          {
            label: 'No commons',
            icon: 'pi pi-globe',
            routerLink: 'no-commons',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        routerLink: 'sorting',
      },
    ];
  }
}

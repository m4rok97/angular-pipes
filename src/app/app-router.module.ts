import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sels/pages/basics/basics.component';
import { NumbersComponent } from './sels/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sels/pages/no-commons/no-commons.component';
import { SortingComponent } from './sels/pages/sorting/sorting.component';



const routes: Routes = [{
  path: '',
  component: BasicsComponent,
  pathMatch: 'full'
},
{
  path: 'numbers',
  component: NumbersComponent,
},
{
  path: 'no-commons',
  component: NoCommonsComponent,
},
{
  path: 'sorting',
  component: SortingComponent,
},
{
  path: '**',
  redirectTo: '',
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }

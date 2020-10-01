import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component'
import { HomeComponent } from './home/home.component'
import { NodeComponent } from './node/node.component'
import { AngularComponent } from './angular/angular.component'
import { ExpressComponent } from './express/express.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'first-component', component: FirstComponent},
  {path: 'second-component', component: SecondComponent},
  {path: 'nodejs', component: NodeComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'express', component: ExpressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

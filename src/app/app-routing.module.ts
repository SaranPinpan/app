import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { NodeComponent } from './node/node.component'
import { AngularComponent } from './angular/angular.component'
import { ExpressComponent } from './express/express.component'

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'nodejs', component: NodeComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'express', component: ExpressComponent},
  {path: '', redirectTo: '/nodejs', pathMatch:'full'} //Temporary index
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

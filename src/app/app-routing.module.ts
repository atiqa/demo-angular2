import { NgModule }             from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ChessComponent }      from './chess/chess.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ NgbModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
	constructor() {
		console.log("AppRoutingModule");
		console.log("routes=" + JSON.stringify(routes));
		
	}
}

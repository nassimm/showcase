import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MostplayedComponent } from './results/mostplayed.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: 'search', component: ResultsComponent, data: [{title: "SEARCH RESULTS"}]},
	{ path: 'search/:term', component: ResultsComponent, data: [{title: "SEARCH RESULTS"}]},
	{ path: 'favs', component: ResultsComponent, pathMatch: 'full', data: [{title: "FAVORITE TRACKS"}]},
	{ path: 'mostplayed', component: ResultsComponent, pathMatch: 'full', data: [{title: "MOST PLAYED"}]},
	{ path: 'recent', component: ResultsComponent, pathMatch: 'full', data: [{title: "RECENTLY ADDED"}]},
	{ path: ':id', component: PlaylistComponent}
];

export const appRouterModule = RouterModule.forRoot(appRoutes);

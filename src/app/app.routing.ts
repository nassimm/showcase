import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MostPlayedComponent } from './results/mostplayed.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: 'search', component: ResultsComponent},
	{ path: 'search/:term', component: ResultsComponent},
	{ path: ':id', component: PlaylistComponent},
	{ path: 'mostplayed', component: MostPlayedComponent}
];

export const appRouterModule = RouterModule.forRoot(appRoutes);

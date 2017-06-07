import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { MenuComponent } from './nav/menu.component';
import { ResultsComponent } from './results/results.component';
import { AddComponent } from './results/add.component';
import { PlayerComponent } from './player/player.component';
import { YoutubeService } from './youtube.service';
import { UidService } from './uid.service';
import { PlaylistsService } from './playlists.service';
import { HomeComponent } from './home/home.component';
import { appRouterModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './nav/searchbar.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ResultsComponent,
    PlayerComponent,
    AddComponent,
    HomeComponent,
    SearchbarComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    appRouterModule,
    YoutubePlayerModule 
  ],
  providers: [YoutubeService, UidService, PlaylistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

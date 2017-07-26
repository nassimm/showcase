import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import 'moment-duration-format';
import { AppComponent } from './app.component';
import { YoutubePlayerService } from './youtube-player.service';
import { YoutubeApiService } from './youtube-api.service';
import { UidService } from './uid.service';
import { BgService } from './bg.service';
import { PlaylistsDataService } from './playlists-data.service';
import { NavbarComponent } from './nav/navbar.component';
import { MenuComponent } from './nav/menu.component';
import { ResultsComponent } from './results/results.component';
import { AddComponent } from './results/add.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { appRouterModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './nav/searchbar.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { PlayComponent } from './player/play.component';
import { PrevComponent } from './player/prev.component';
import { ResultComponent } from './results/result.component';
import { DurationPipe } from './duration.pipe';
import { AgoPipe } from './ago.pipe';
import { PopoverModule } from 'ngx-bootstrap';
import { AddPlaylistComponent } from './add-playlist.component';
import { MostplayedComponent } from './results/mostplayed.component';
import { RepeatComponent } from './player/repeat.component';
import { DurationShortFormPipe } from './duration-short-form.pipe';
import { NoPlaylistComponent } from './playlist/no-playlist.component';
import { CurrentlyPlayingComponent } from './player/currently-playing.component';
import { MenuService } from './menu.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { ShuffleComponent } from './player/shuffle.component';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ShareTrackComponent } from './results/share-track.component';
import { ShareComponent } from './results/share.component';

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
    PlaylistComponent,
    PlayComponent,
    PrevComponent,
    ResultComponent,
    DurationPipe,
    AgoPipe,
    AddPlaylistComponent,
    MostplayedComponent,
    RepeatComponent,
    DurationShortFormPipe,
    NoPlaylistComponent,
    CurrentlyPlayingComponent,
    ShuffleComponent,
    ShareTrackComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouterModule,
    YoutubePlayerModule,
    PopoverModule.forRoot(),
    ClickOutsideModule,
    PerfectScrollbarModule.forRoot(),
    ShareButtonsModule.forRoot()
  ],
  providers: [YoutubePlayerService, YoutubeApiService, UidService, PlaylistsDataService, BgService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

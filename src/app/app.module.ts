import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
// import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import 'moment-duration-format';
import { AddComponent } from './results/add.component';
import { AddPlaylistComponent } from './playlist/add-playlist.component';
import { AgoPipe } from './pipes/ago.pipe';
import { AppComponent } from './app.component';
import { appRouterModule } from './app.routing';
import { BgService } from './services/bg.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { CurrentlyPlayingComponent } from './player/currently-playing.component';
import { DurationPipe } from './pipes/duration.pipe';
import { DurationShortFormPipe } from './pipes/duration-short-form.pipe';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './nav/menu.component';
import { MenuService } from './services/menu.service';
import { NavbarComponent } from './nav/navbar.component';
import { NoPlaylistComponent } from './playlist/no-playlist.component';
import { PlayComponent } from './player/play.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistsDataService } from './services/playlists-data.service';
import { PopoverModule } from 'ngx-bootstrap';
import { PrevComponent } from './player/prev.component';
import { RepeatComponent } from './player/repeat.component';
import { ResultComponent } from './results/result.component';
import { ResultsComponent } from './results/results.component';
import { SearchbarComponent } from './nav/searchbar.component';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ShareComponent } from './results/share.component';
import { ShareTrackComponent } from './results/share-track.component';
import { ShuffleComponent } from './player/shuffle.component';
import { UidService } from './services/uid.service';
import { YoutubeApiService } from './services/youtube-api.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { YoutubePlayerService } from './services/youtube-player.service';

@NgModule({
  declarations: [
    AddComponent,
    AddPlaylistComponent,
    AgoPipe,
    AppComponent,
    CurrentlyPlayingComponent,
    DurationPipe,
    DurationShortFormPipe,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    NoPlaylistComponent,
    PlayComponent,
    PlayerComponent,
    PlaylistComponent,
    PrevComponent,
    RepeatComponent,
    ResultComponent,
    ResultsComponent,
    SearchbarComponent,
    ShareComponent,
    ShareTrackComponent,
    ShuffleComponent
  ],
  imports: [
    appRouterModule,
    BrowserModule,
    ClickOutsideModule,
    FormsModule,
    HttpModule,
    PopoverModule.forRoot(),
    ReactiveFormsModule,
    ShareButtonsModule.forRoot(),
    YoutubePlayerModule
    // PerfectScrollbarModule.forRoot(),
  ],
  providers: [YoutubePlayerService, YoutubeApiService, UidService, PlaylistsDataService, BgService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

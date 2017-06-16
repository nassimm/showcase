import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YoutubeService } from './youtube.service';
import { UidService } from './uid.service';
import { BgService } from './bg.service';
import { PlaylistsService } from './playlists.service';
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
    AgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    appRouterModule,
    YoutubePlayerModule,
    PopoverModule.forRoot()
  ],
  providers: [YoutubeService, UidService, PlaylistsService, BgService],
  bootstrap: [AppComponent]
})
export class AppModule { }

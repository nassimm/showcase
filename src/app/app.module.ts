import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { MenuComponent } from './nav/menu.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { YoutubeService } from './youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SearchComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

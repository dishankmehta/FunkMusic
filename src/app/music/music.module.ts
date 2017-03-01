import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";


import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import {ApiService} from "./shared/api.service";
import {MusicService} from "./shared/music.service";
import {AutoCompleteModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AutoCompleteModule
  ],
  exports:[
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicProgressComponent,
    MusicSearchComponent,
    MusicPlayerComponent
  ],
  declarations: [
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicProgressComponent,
    MusicSearchComponent,
    MusicPlayerComponent
  ],
  providers:[
    ApiService,
    MusicService
  ]
})
export class MusicModule { }

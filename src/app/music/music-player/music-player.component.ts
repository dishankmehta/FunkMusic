import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() paused;
  // Controls
  @Output() backward = new EventEmitter();
  @Output() pauseplay = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() stop = new EventEmitter();


}

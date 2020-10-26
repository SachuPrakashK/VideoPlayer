import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  //inputs: ['videos'],
  //outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  @Input() videos
  @Output() SelectVideo: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.warn(this.videos)
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

}

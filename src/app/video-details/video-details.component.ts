import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  //inputs: ['video'],
  //outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailsComponent implements OnInit {

  editTitle: boolean = false;
  @Input() video
  @Output() updateVideoEvent: EventEmitter<any>=new EventEmitter();
  @Output() deleteVideoEvent: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }

}

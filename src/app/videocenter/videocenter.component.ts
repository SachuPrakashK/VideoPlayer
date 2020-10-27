import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from "../video";
@Component({
  selector: 'app-video-center',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css'],
  providers: [VideoService]
})
export class VideocenterComponent implements OnInit {
  selectedVideo: Video;
  hidenewVideo: boolean = true;
  videos: any;
  videoAdded: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
      .subscribe(videoFetched => this.videos = videoFetched);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(videoAdded => {
        this.videos.push(videoAdded);
        this.hidenewVideo = true;
        console.log(videoAdded);
      });

  }

  onUpdateVideoEvent(video: any) {
    console.log(video);
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  };

  onDeleteVideoEvent(video: any) {
    console.log(video);
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeleteVideo => {
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === video._id) {
            videoArray.splice(i, 1);
          }
        }
      });
    this.selectedVideo = null;
  };

}
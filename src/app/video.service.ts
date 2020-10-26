import { Video } from './video';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {

  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  private _putUrl = "/api/video/";
  private _deleteUrl = "/api/video/";

  constructor(private _http: HttpClient) { }

  getVideos() {
    return this._http.get(this._getUrl, {responseType: 'json'});
  }

  addVideo(video: Video) {
    return this._http.post(this._postUrl,video, {responseType:'json'});
  }

  updateVideo(video: Video) {
    return this._http.put(this._putUrl + video._id,video, {responseType:'json'});
  }

  deleteVideo(video: Video) {
    return this._http.delete(this._deleteUrl + video._id,{responseType:'json'});
  }

}
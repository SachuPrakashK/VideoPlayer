import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideocenterComponent } from './videocenter/videocenter.component';
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoDetailsComponent } from "./video-details/video-details.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: VideocenterComponent
  },
  {
    path: 'video-list',
    component: VideoListComponent
  },
  {
    path: 'video-details',
    component: VideoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

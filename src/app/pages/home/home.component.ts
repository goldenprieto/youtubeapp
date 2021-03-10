import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private youTubeServices : YoutubeService) { }

  ngOnInit() {
    this.youTubeServices.getVideos().subscribe(resp =>{
      console.log(resp.items[1].snippet.title);
      
    })
  }

}

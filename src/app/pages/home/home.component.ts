import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  
  videos:Video[]=[]

  constructor( private youTubeServices : YoutubeService) { }

  ngOnInit() {
    this.cargarVideos();
  }

  cargarVideos(){
    this.youTubeServices.getVideos().subscribe(resp =>{
      
      this.videos.push(...resp);
      console.log(this.videos);
      
      
    })
  }

  mostrarVideo(video: Video){
    console.log(video);
    Swal.fire({
    
      html:
        `
        <div clas="text-center"><strong>Titulo :</strong> <u>${ video.title }</u></div>
        <hr>
        <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
            frameborder="0" allow="accelerometer; 
            autoplay; 
            clipboard-write;
            encrypted-media;
            gyroscope; 
            picture-in-picture" allowfullscreen>
          </iframe>`
    })
    
  }
  
}

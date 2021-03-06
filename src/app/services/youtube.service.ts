import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { YoutubeResponde, Video } from '../models/youtube.models';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  private youTubeUrl ='https://www.googleapis.com/youtube/v3' ;
  private apiKey ="AIzaSyDmOaN1QoxE-m4MQNIw31vUzQcEX7m-FQ4";
  private playlist= "UUuaPTYj15JSkETGnEseaFFg";
  private nextPageToken= '';


  constructor(
     private  http: HttpClient
  ) { }
  
  getVideos(){
    
    const url= `${this.youTubeUrl}/playlistItems`;
    const params = new HttpParams()
              .set('part','snippet')
              .set('key',this.apiKey)
              .set('playlistId',this.playlist)
              .set('maxResults','10')
              .set('pageToken',this.nextPageToken)


    return this.http.get<YoutubeResponde>(url,{ params : params })
                      .pipe(map( resp => {
                          this.nextPageToken = resp.nextPageToken;
                          return resp.items;
                          
                      }),
                      map(items =>{
                        console.log(this.nextPageToken);
                        
                        return items.map(video => video.snippet)
                      })
                    )
  }
}

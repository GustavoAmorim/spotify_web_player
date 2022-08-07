import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'spotift-web-player';

  ngOnInit(): void {

    const spotifyApi = new SpotifyWebApi();
  }
}




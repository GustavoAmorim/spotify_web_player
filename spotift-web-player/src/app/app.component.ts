import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

import { AuthSpotifyService } from './app/core/services/auth-spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'spotift-web-player';

  constructor(private authSpotify: AuthSpotifyService) {

  }

  ngOnInit(): void {

    this.verificarTokenUrlCallback();
  }


  verificarTokenUrlCallback() {

    const token = this.authSpotify.obterTokenUrlCallback();
    if(!!token) {

      console.log(token);
      this.authSpotify.setAccessToken(token);
    }
  }

  onClickPlay() {

    this.authSpotify.executarMusica('5lJEp8lZ51r2SLsvl1Rdaf')
      .then(ok => {

        console.log(ok);
      }).catch(error => {

        console.log(error);
      });
  }

  onClickLogin() {

    window.open(this.authSpotify.obterUrlLogin());
  }
}




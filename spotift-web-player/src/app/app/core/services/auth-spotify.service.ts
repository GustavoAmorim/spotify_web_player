import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { environment, SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService {

  readonly STATE_LENGTH = 16;

  private spotifyApi;

  constructor(private httpClient: HttpClient) {

    this.spotifyApi = new SpotifyWebApi()
  }

  obterUrlLogin(): string {

    const initParams = '?';
    const separator = '&';

    const clientIdLabel = 'client_id=';
    const redirectUrlLabel = 'redirect_uri=';
    const scopesLabel = 'scope=';
    const responseTypeLabel = 'response_type=';
    const showDialogLabel = 'show_dialog=';
    const stateLabel = 'state=';

    const responseType = 'token';
    const showDialog = 'true';

    return SpotifyConfiguration.authEndpoint + initParams
            + clientIdLabel + SpotifyConfiguration.clientId + separator
            + redirectUrlLabel + encodeURIComponent(SpotifyConfiguration.redirectUrl) + separator
            + scopesLabel + encodeURIComponent(SpotifyConfiguration.scopes.join(' ')) + separator
            + responseTypeLabel + responseType + separator
            + showDialogLabel + showDialog + separator
            + stateLabel + this.generateStateRandomString(this.STATE_LENGTH);
  }

  obterTokenUrlCallback() {

    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  generateStateRandomString(length: number): string {

    let text = '';
    const possible = environment.authLoginStateGeneratorAlfabeto;

    for (let i = 0; i < length; i++) {

      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  setAccessToken(token: string) {

    this.spotifyApi.setAccessToken(token);
  }

  async executarMusica(musicaId: string) {

    await this.spotifyApi.queue(musicaId);
    await this.spotifyApi.skipToNext();
  }
}

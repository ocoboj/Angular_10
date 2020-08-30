import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQA9y4kKP6MiPvY045A40hytiVHQ3DVoXonDoYFtblAC1FfETvOp-zR5yzg93xxljNfPP_VW86mquXjYRs0'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data => data['albums'].items));

  }

  getArtista( termino: string) {

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQA9y4kKP6MiPvY045A40hytiVHQ3DVoXonDoYFtblAC1FfETvOp-zR5yzg93xxljNfPP_VW86mquXjYRs0'

    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    .pipe( map (data => data['artists'].items));


  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDgkhpveX4MyFTi3qBCKeK57kQJUrmMCoG1z1wo7gmAK6li_MT1cIy9CkxBq1n1WQB3XxR5BaiaZ1ZOU5E'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers } )
      .subscribe(data => {
        console.log(data);
      });

  }
}

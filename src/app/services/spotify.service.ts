import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  authorizationToken: string =
    'BQA8UJEuQL1vexbeWvd_J0bNBqr1Xixt3Pw7avR9kLbdsxKRIksnLnBzmBKQSAEvzf-Lv4m-WjeFPKLWlXo';

  constructor(private http: HttpClient) {}

  getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authorizationToken}`,
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases?limit=15').pipe(
      map(data => data['albums'].items)
    );
  }

  getArtists(query: string): Observable<any> {
    return this.getQuery(`search?q=${query}&type=artist&limit=15`).pipe(
      map(data => data['artists'].items)
    );
  }

  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<any> {
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(
      map(data => data['tracks'])
    );
  }
}
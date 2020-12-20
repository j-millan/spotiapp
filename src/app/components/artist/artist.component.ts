import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  
  artist: any;
  topTracks: any[] = [];

  loading: boolean = true;

  constructor(
    private spotify: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string): void {
    this.spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string): void {
    this.spotify.getTopTracks(id).subscribe((topTracks: any) => {
      this.topTracks = topTracks;
      console.log(topTracks);
    });
  }

}

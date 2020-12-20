import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean = false;

  constructor(
    private spotify: SpotifyService,
  ) { }

  ngOnInit(): void {
  }

  search(query: string): void {
    this.loading = true;
    this.spotify.getArtists(query)
      .subscribe( (data: any) => {
        this.artists = data;
        this.loading = false; 
      });
  }
}

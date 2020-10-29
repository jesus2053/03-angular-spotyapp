import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any [] = [];
  loading:boolean  


  constructor( private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.loading = true;
    this.spotifyService.getArtistas(termino).subscribe(data => {
      this.artistas = data;
      this.loading = false;
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private http: HttpClient, private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
      
    }));
  }
}

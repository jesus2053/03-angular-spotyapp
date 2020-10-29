import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

const headers =  new  HttpHeaders({
  'Authorization': 'Bearer BQCFs9r-61C9CuwLhYLHl-pDP1wFINn5F8DbPgRlC43wrCkRI6pMl0VT_Bu46VVhaJo7YnnNrZl7SDxpS70'
});

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
   }

   getQuery( query: string) {
      const url=  `https://api.spotify.com/v1/${query}`;

      return this.http.get(url, { headers });
   }

  getNewReleases(): Observable<any>{
  
    return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map(( data: any ) => data.albums.items));
  }

  getArtistas( termino: string ){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                  .pipe( map(( data: any ) => data.artists.items));
  }

  getArtista( id: string ){
    return this.getQuery(`artists/${id}`);
                 
  }

  getTopTracks( id: string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                  .pipe( map(( data: any ) => data['tracks']));
                 
  }

}

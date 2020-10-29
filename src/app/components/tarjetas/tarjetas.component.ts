import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

   artistaId: any;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  verArtista( item: any ) {
     

    if(item.type === 'artist') {
       this.artistaId = item.id;
    }else  {
      this.artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist',this.artistaId])

  }

}

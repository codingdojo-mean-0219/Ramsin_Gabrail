import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }

  getPokemon(){
    let squirtle = this._http.get('https://pokeapi.co/api/v2/pokemon/7/');
    squirtle.subscribe(data => console.log("Got Squirtle! Here are his abilities"))
    squirtle.subscribe(data => {
      for (const i of data.abilities) {
        console.log(i.ability.name);
      }
      })
    let torrent = this._http.get('https://pokeapi.co/api/v2/ability/torrent/');
    torrent.subscribe(data => console.log("Here are others with this ability..."))
    torrent.subscribe(data => {
      for (const i of data.pokemon) {
        console.log(i.pokemon.name);
      }
      })
    }

  }


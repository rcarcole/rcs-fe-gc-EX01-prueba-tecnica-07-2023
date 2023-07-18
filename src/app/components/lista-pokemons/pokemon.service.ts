import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  getAllPokemons() {
      let numeroRandom = Math.floor(Math.random() * 1281) + 1;
      return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=8&offset=' + numeroRandom).pipe(
        map((pokemons: any)  => {
          return pokemons.results;
        }),
        mergeMap(pokemons => {
        return forkJoin(pokemons.map((pokemon: { url: string; }) => this.http.get(pokemon.url)));
      })
      );
    
  }


  getPokemonByName(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

}

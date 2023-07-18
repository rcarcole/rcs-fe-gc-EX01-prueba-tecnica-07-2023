import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent {
  pokemons: any = [];

  constructor(private pokeService: PokemonService) {
    this.pokeService.getAllPokemons().subscribe((data: any) => {
      this.pokemons = data;
    });
  }

}

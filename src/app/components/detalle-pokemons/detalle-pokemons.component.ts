import { Component } from '@angular/core';
import { PokemonService } from '../lista-pokemons/pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon'

@Component({
  selector: 'app-detalle-pokemons',
  templateUrl: './detalle-pokemons.component.html',
  styleUrls: ['./detalle-pokemons.component.css']
})
export class DetallePokemonsComponent {
pokemon: Pokemon = { name: ''};

  constructor(private pokeService: PokemonService, private router: Router) {
  let pokemonName = this.router.url.split("/")[2];
  console.log(pokemonName);
  this.pokeService.getPokemonByName(pokemonName).subscribe((data: any) => {
    this.pokemon.name = data.name;
    this.pokemon.img = data.sprites.front_default;
    this.pokemon.abilities = data.abilities;
    this.pokemon.generation = data.game_indices;
    console.log(this.pokemon);
  });
}
}

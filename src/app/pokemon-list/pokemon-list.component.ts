import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Pokemon } from '../shared/pokemon.model';
import { PokemonService } from '../shared/pokemon.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'cmp-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  private pokemons: any[] = [];
  
  constructor(
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons(true);
  }

  loadPokemons(all: boolean): void {
    var result : Observable<Pokemon[]>;
    if (all) {
      result = this.pokemonService.getAllPokemon();
    } else {
      result = this.pokemonService.getAllFavoritePokemon();
    }

    result.subscribe(
      data => this.pokemons = data,
      error => console.error('The following error has been raised', error)
    );
  }
}

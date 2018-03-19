import { Component, Input } from '@angular/core';

import { PokemonService } from '../../shared/pokemon.service';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'cmp-pokemon-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {

  @Input() pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService) {
  }

  toggleFavoritePokemon(pokemon: Pokemon): void {
    this.pokemonService.toggleFavoritePokemon(pokemon).subscribe(
      data => this.pokemon = data,
      error => console.error('The following error has been raised', error)
    );
  }

}

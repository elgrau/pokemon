import { Component, Input } from '@angular/core';

import { PokemonType } from '../../shared/pokemon-type.model';

@Component({
  selector: 'cmp-pokemon-type',
  template: `<img class="pokemon-type" title="{{pokemonType.typeName}}" src="{{ pokemonType.imageUrl }}"/>`
})
export class PokemonTypeComponent {

  @Input() pokemonType: PokemonType;

  constructor() { }
}

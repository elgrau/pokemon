import { Component, Input } from '@angular/core';

import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'cmp-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent {

  @Input() pokemons: Pokemon[];

  constructor() { }

}

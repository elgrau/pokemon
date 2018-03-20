import { Component, OnInit } from '@angular/core';

import { PokemonType } from '../shared/pokemon-type.model';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'cmp-pokemon-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private pokemonCount: number = 0;
  private favoritePokemonCount: number = 0;
  private pokemonTypes: any[] = [];
  private recentPokemons: any[] = [];

  constructor(
    private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.loadPokemonTypes();
    this.loadRecetPokemons();
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.pokemonService.getAllPokemon().subscribe(
      data => this.pokemonCount = data ? data.length : 0,
      error => console.error('The following error has been raised', error)
    );

    this.pokemonService.getAllFavoritePokemon().subscribe(
      data => this.favoritePokemonCount = data ? data.length : 0,
      error => console.error('The following error has been raised', error)
    );
  }

  loadPokemonTypes(): void {
    this.pokemonService.getAllFrecuentTypes().subscribe(
      data => this.pokemonTypes = data,
      error => console.error('The following error has been raised', error)
    );
  }

  loadRecetPokemons(): void {
    this.pokemonService.getAllRecentPokemon().subscribe(
      data => this.recentPokemons = data,
      error => console.error('The following error has been raised', error)
    );
  }
}

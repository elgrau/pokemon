import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMultiSelectOption, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from '../shared/pokemon.model';
import { PokemonType } from '../shared/pokemon-type.model';

/**
 * Pendiente de añadir validaciones al formulario, alertas y mensajes al guardar
 */
@Component({
  selector: 'cmp-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  private mode: string = 'new';
  private pokemon: Pokemon;
  private pokemonTypes = [];
  private pokemonEvolutions = [];
  private pokemonSelectedTypes: any[] = [];
  private pokemonEvolutionSelected: any[] = [];

  private pokemonTypeSettings = {
    enableSearch: false,
    selectionLimit: 2,
    checkedStyle: 'fontawesome'
  };

  private pokemonTypeTexts: IMultiSelectTexts = {
    defaultTitle: 'Tipo de Pokemon'
  };

  private pokemonEvolutionSettings = {
    enableSearch: false,
    selectionLimit: 1,
    checkedStyle: 'fontawesome'
  };

  private pokemonEvolutionTexts: IMultiSelectTexts = {
    defaultTitle: 'No evoluciona'
  };

  constructor(
    private pokemonService: PokemonService,
    private actRouter: ActivatedRoute) {

      this.actRouter.params.subscribe(params => {
        const id = +params['id'];
        if (id) {
          this.mode = 'edit';
          this.loadPokemon(id);
        } else {
          this.pokemon = new Pokemon();
        }
      });
    }

  ngOnInit() {
    this.loadPokemonTypes(); 
    this.loadPokemonEvolutions();
  }

  loadPokemon(id: number) {
    this.pokemonService.findPokemon(id)
      .subscribe(
          data => { 
            this.pokemon = data; 
            this.pokemonSelectedTypes = data.types.map(v => v.id);
            this.pokemonEvolutionSelected = data.nextEvolution? [data.nextEvolution.id]: [];
          },
          error => console.error('The following error has been raised', error)
      );
  }

  loadPokemonTypes(): void {
    this.pokemonService.getAllPokemonType()
      .subscribe(
          data => { this.pokemonTypes = data.map(v => ({'id': v.id, 'name': v.typeName})); },
          error => console.error('The following error has been raised', error)
      );
  }

  loadPokemonEvolutions(): void {
    this.pokemonService.getAllPokemon()
      .subscribe(
          data => {             
            var evolutions = data.map(v => ({'id': v.id, 'name': v.name})); 
            if (this.pokemon) {
              evolutions = evolutions.filter(p => p.id !== this.pokemon.id);
            }
            this.pokemonEvolutions = evolutions;
          },
          error => console.error('The following error has been raised', error)
      );
  }

  onSubmit(): void {
    this.pokemon.types = this.pokemonSelectedTypes;
    this.pokemon.nextEvolution = this.pokemonEvolutionSelected ? this.pokemonEvolutionSelected[0] : null

    if (this.mode === 'new') {
      this.pokemonService.createPokemon(this.pokemon);
      this.mode = 'edit';
    } else {
      this.pokemonService.updatePokemon(this.pokemon);
    }
  }
}

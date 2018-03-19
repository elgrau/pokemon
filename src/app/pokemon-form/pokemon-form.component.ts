import { Component, OnInit } from '@angular/core';

import { IMultiSelectOption, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { PokemonService } from '../shared/pokemon.service';
import { PokemonType } from '../shared/pokemon-type.model';

@Component({
  selector: 'cmp-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  private pokemonTypes = [];
  private pokemonSelectedTypes: any[] = [];

  private msTypesSettings = {
    enableSearch: false,
    selectionLimit: 2,
    checkedStyle: 'fontawesome'
  };

  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
};

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemonTypes(); 
  }

  loadPokemonTypes(): void {
    this.pokemonService.getAllPokemonType()
      .subscribe(
          data => { this.pokemonTypes = data.map(v => ({'id': v.id, 'name': v.typeName})); },
          error => console.error('The following error has been raised', error)
      );
  }

}

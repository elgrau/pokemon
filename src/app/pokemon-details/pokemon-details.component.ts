import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

import { Pokemon } from '../shared/pokemon.model';
import { PokemonType } from '../shared/pokemon-type.model';
import { PokemonService } from '../shared/pokemon.service';

export interface PokemonDetailsModel {
  pokemonId: number;
}

@Component({
  selector: 'cmp-pokemon-details',
  template: `
    <div class="modal-dialog pokemon-details">
      <div class="modal-content" >
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="card card-profile">
                <div class="card-avatar">
                    <img class="img" src="{{pokemon.imageUrl}}"/>
                </div>
                <div class="content">
                    <h4 class="card-title">{{ pokemon.name }}</h4>
                    <div class="pokemon-types">
                      <ng-container *ngFor="let pokemonType of pokemon.types">
                          <cmp-pokemon-type [pokemonType]="pokemonType"></cmp-pokemon-type>
                      </ng-container>
                    </div>
                    <p class="card-content">{{ pokemon.description }}</p>
                    <div *ngIf="pokemon.nextEvolution">
                      <h3>Evoluciona en</h3>
                      <h4>
                        <span class="link" (click)=loadPokemon(pokemon.nextEvolution.id)>{{ pokemon.nextEvolution.name }}</span>
                      </h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" routerLinkActive="active" routerLink="/pokemon-edit/{{ pokemon.id }}" (click)="close()">Editar</button>
          <button type="button" class="btn btn-secondary" (click)="close()">Close</button>
        </div>
      </div>
    </div>`
})
export class PokemonDetailsComponent extends DialogComponent<PokemonDetailsModel, null> implements PokemonDetailsModel, OnInit {

  pokemonId: number;

  private pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    dialogService: DialogService) {
      super(dialogService);
    }

  ngOnInit() {
    this.loadPokemon(this.pokemonId);
  }

  loadPokemon(id: number) {
    this.pokemonId = id;
    this.pokemonService.findPokemon(this.pokemonId).subscribe(
      data => this.pokemon = data,
      error => console.error('The following error has been raised', error)
    );
  }
}

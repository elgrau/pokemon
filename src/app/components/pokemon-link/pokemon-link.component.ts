import { Component, Input } from '@angular/core';

import { PokemonDetailsComponent } from '../../pokemon-details/pokemon-details.component';
import { Pokemon } from '../../shared/pokemon.model';
import { DialogService } from 'ng2-bootstrap-modal';


@Component({
  selector: 'cmp-pokemon-link',
  templateUrl: './pokemon-link.component.html',
  styleUrls: ['./pokemon-link.component.css']
})
export class PokemonLinkComponent {

  @Input() pokemon: Pokemon;

  constructor(private dialogService:DialogService) { }

  showPokemonDetails(id: number) {
    this.dialogService.addDialog(PokemonDetailsComponent, 
      {pokemonId: id}, { closeByClickingOutside:true, backdropColor: 'rgba(219, 219, 219, 0.5)' });
  }
}

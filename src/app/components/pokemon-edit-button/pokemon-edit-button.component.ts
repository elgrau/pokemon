import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-pokemon-edit-button',
  templateUrl: './pokemon-edit-button.component.html'
})
export class PokemonEditButtonComponent {

  @Input() link: string;

  constructor() {
  }
 
}

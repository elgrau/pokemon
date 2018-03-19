import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon.model';
import { PokemonType } from './pokemon-type.model';

@Injectable()
export class PokemonService {

  private bicho:PokemonType = {'id':1, 'typeName':'Bicho', 'imageUrl':'assets/img/type-bicho.png'};
  private dragon: PokemonType = {'id':2, 'typeName':'Dragón', 'imageUrl':'assets/img/type-dragon.png'};
  private hada: PokemonType = {'id':3, 'typeName':'Hada', 'imageUrl':'assets/img/type-hada.png'};
  private fuego: PokemonType = {'id':4, 'typeName':'Fuego', 'imageUrl':'assets/img/type-fuego.png'};

  private pikachu: Pokemon = {'id': 1, 'name': 'Pikachu', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet gravida ligula, dictum aliquam odio. Vestibulum interdum urna vel aliquet pulvinar. Morbi efficitur sapien risus, eget commodo metus luctus in. Aliquam felis ligula, viverra sed elit id, viverra vehicula lacus.', 'types':[this.bicho,this.hada], 'nextEvolution': null, 'favorite': true, 'imageUrl':'assets/img/pokemons/squirtle.jpg'};
  private antolin: Pokemon = {'id': 2, 'name': 'Antolin', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet gravida ligula, dictum aliquam odio. Vestibulum interdum urna vel aliquet pulvinar. Morbi efficitur sapien risus, eget commodo metus luctus in. Aliquam felis ligula, viverra sed elit id, viverra vehicula lacus.', 'types':[this.dragon], 'nextEvolution': this.pikachu, 'favorite': false, 'imageUrl':'assets/img/pokemons/unknown.jpg'};
  private joselin: Pokemon = {'id': 3, 'name': 'Joselín', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet gravida ligula, dictum aliquam odio. Vestibulum interdum urna vel aliquet pulvinar. Morbi efficitur sapien risus, eget commodo metus luctus in. Aliquam felis ligula, viverra sed elit id, viverra vehicula lacus.', 'types':[this.fuego], 'nextEvolution': this.pikachu, 'favorite': false, 'imageUrl':'assets/img/pokemons/unknown.jpg'};
  private federico: Pokemon = {'id': 4, 'name': 'Federico', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet gravida ligula, dictum aliquam odio. Vestibulum interdum urna vel aliquet pulvinar. Morbi efficitur sapien risus, eget commodo metus luctus in. Aliquam felis ligula, viverra sed elit id, viverra vehicula lacus.', 'types':[this.hada], 'nextEvolution': this.pikachu, 'favorite': false, 'imageUrl':'assets/img/pokemons/unknown.jpg'};

  constructor() { }

  getAllPokemonType(): Observable<PokemonType[]> {
    return Observable.create(observer => {
      observer.next([this.bicho, this.dragon, this.hada, this.fuego]);
    });
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return Observable.create(observer => {
      observer.next([this.antolin, this.pikachu, this.joselin, this.federico]);
    });
  }

  getAllFavoritePokemon(): Observable<Pokemon[]> {
    return Observable.create(observer => {
      observer.next([this.antolin, this.pikachu, this.joselin, this.federico].filter(pokemon => pokemon.favorite));
    });
  }

  getAllRecentPokemon(): Observable<Pokemon[]> {
    return Observable.create(observer => {
      observer.next([
        this.antolin,
        this.pikachu,
        this.joselin,
        this.federico
      ]);
    });
  }

  findPokemon(id: number): Observable<Pokemon> {
    var pokemon: Pokemon;

    if (id === 1) {
      pokemon = this.pikachu;
    } else {
      pokemon = this.antolin;
    }
    return Observable.create(observer => {
      observer.next(
        pokemon
      );
    });
  }

  toggleFavoritePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return Observable.create(observer => {
      pokemon.favorite = !pokemon.favorite;
      observer.next(pokemon);
    });
  }

}

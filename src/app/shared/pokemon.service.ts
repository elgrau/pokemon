import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon.model';
import { PokemonType } from './pokemon-type.model';

export class PokemonDatabase {
  public static POKEMON_TYPES: PokemonType[] = [
    {'id':1, 'typeName':'Bicho', 'imageUrl':'assets/img/type-bicho.png'},
    {'id':2, 'typeName':'Dragón', 'imageUrl':'assets/img/type-dragon.png'},
    {'id':3, 'typeName':'Hada', 'imageUrl':'assets/img/type-hada.png'},
    {'id':4, 'typeName':'Fuego', 'imageUrl':'assets/img/type-fuego.png'},
    {'id':5, 'typeName':'Fantasma', 'imageUrl':'assets/img/type-fantasma.png'},
    {'id':6, 'typeName':'Tierra', 'imageUrl':'assets/img/type-tierra.png'},
    {'id':7, 'typeName':'Normal', 'imageUrl':'assets/img/type-normal.png'},
    {'id':8, 'typeName':'Psíquico', 'imageUrl':'assets/img/type-psiquico.png'},
    {'id':9, 'typeName':'Acero', 'imageUrl':'assets/img/type-acero.png'},
    {'id':10, 'typeName':'Siniestro', 'imageUrl':'assets/img/type-siniestro.png'},
    {'id':11, 'typeName':'Eléctrico', 'imageUrl':'assets/img/type-electrico.png'},
    {'id':12, 'typeName':'Lucha', 'imageUrl':'assets/img/type-lucha.png'},
    {'id':13, 'typeName':'Volador', 'imageUrl':'assets/img/type-volador.png'},
    {'id':14, 'typeName':'Planta', 'imageUrl':'assets/img/type-planta.png'},
    {'id':15, 'typeName':'Hielo', 'imageUrl':'assets/img/type-hielo.png'},
    {'id':16, 'typeName':'Veneno', 'imageUrl':'assets/img/type-veneno.png'},
    {'id':17, 'typeName':'Roca', 'imageUrl':'assets/img/type-roca.png'},
    {'id':18, 'typeName':'Agua', 'imageUrl':'assets/img/type-agua.png'}
  ];

  private static DEFAULT_POKEMON_DESCRIPTION: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet gravida ligula, dictum aliquam odio. Vestibulum interdum urna vel aliquet pulvinar. Morbi efficitur sapien risus, eget commodo metus luctus in. Aliquam felis ligula, viverra sed elit id, viverra vehicula lacus.';
  private static DEFAULT_POKEMON_IMAGE: string = 'assets/img/pokemons/unknown.jpg';

  private static pikachu: Pokemon = {'id': 1, 'name': 'Pikachu', 'description': PokemonDatabase.DEFAULT_POKEMON_DESCRIPTION, 'types':[PokemonDatabase.POKEMON_TYPES[10]], 'nextEvolution': null, 'favorite': true, 'imageUrl': PokemonDatabase.DEFAULT_POKEMON_IMAGE};
  private static squirtle: Pokemon = {'id': 2, 'name': 'Squirtle', 'description': PokemonDatabase.DEFAULT_POKEMON_DESCRIPTION, 'types':[PokemonDatabase.POKEMON_TYPES[17]], 'nextEvolution': null, 'favorite': true, 'imageUrl': 'assets/img/pokemons/squirtle.jpg'};
  private static antolin: Pokemon = {'id': 3, 'name': 'Antolín', 'description': PokemonDatabase.DEFAULT_POKEMON_DESCRIPTION, 'types':[PokemonDatabase.POKEMON_TYPES[8], PokemonDatabase.POKEMON_TYPES[13]], 'nextEvolution': null, 'favorite': false, 'imageUrl': PokemonDatabase.DEFAULT_POKEMON_IMAGE};
  private static wartortle: Pokemon = {'id': 4, 'name': 'Wartortle', 'description': PokemonDatabase.DEFAULT_POKEMON_DESCRIPTION, 'types':[PokemonDatabase.POKEMON_TYPES[17]], 'nextEvolution': PokemonDatabase.squirtle, 'favorite': false, 'imageUrl': PokemonDatabase.DEFAULT_POKEMON_IMAGE};
  private static blastoise: Pokemon = {'id': 5, 'name': 'Blastoise', 'description': PokemonDatabase.DEFAULT_POKEMON_DESCRIPTION, 'types':[PokemonDatabase.POKEMON_TYPES[17]], 'nextEvolution': PokemonDatabase.wartortle, 'favorite': false, 'imageUrl': PokemonDatabase.DEFAULT_POKEMON_IMAGE};
  private static togepi: Pokemon = {'id': 6, 'name': 'Togepi', 'description': PokemonDatabase.DEFAULT_POKEMON_DESCRIPTION, 'types':[PokemonDatabase.POKEMON_TYPES[2]], 'nextEvolution': null, 'favorite': false, 'imageUrl': PokemonDatabase.DEFAULT_POKEMON_IMAGE};
  

  public static pokemons: Pokemon[] = [
    PokemonDatabase.pikachu,
    PokemonDatabase.squirtle,
    PokemonDatabase.antolin,
    PokemonDatabase.wartortle,
    PokemonDatabase.blastoise,
    PokemonDatabase.togepi
  ];
}

@Injectable()
export class PokemonService {

  constructor() { }

  getAllPokemonType(): Observable<PokemonType[]> {
    return Observable.create(observer => {
      observer.next(PokemonDatabase.POKEMON_TYPES);
    });
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return Observable.create(observer => {
      observer.next(PokemonDatabase.pokemons);
    });
  }

  getAllFavoritePokemon(): Observable<Pokemon[]> {
    return Observable.create(observer => {
      observer.next(PokemonDatabase.pokemons.filter(pokemon => pokemon.favorite));
    });
  }

  getAllRecentPokemon(): Observable<Pokemon[]> {
    return Observable.create(observer => {
      observer.next(PokemonDatabase.pokemons.slice(0,4));
    });
  }

  getAllFrecuentTypes(): Observable<PokemonType[]> {
    return Observable.create(observer => {
      observer.next(PokemonDatabase.POKEMON_TYPES.slice(0,4));
    });
  }

  findPokemon(id: number): Observable<Pokemon> {    
    return Observable.create(observer => {
      observer.next(
        PokemonDatabase.pokemons.filter(p => p.id === id)[0]
      );
    });
  }

  findPokemonType(id: number): Observable<PokemonType> {    
    return Observable.create(observer => {
      observer.next(
        PokemonDatabase.POKEMON_TYPES.filter(p => p.id === id)[0]
      );
    });
  }

  toggleFavoritePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return Observable.create(observer => {
      pokemon.favorite = !pokemon.favorite;
      observer.next(pokemon);
    });
  }

  createPokemon(pokemon: Pokemon) {
    if (pokemon) {
      // Pendiente de establecer correctamente los tipos y la evolución
      PokemonDatabase.pokemons.push(pokemon);
      console.log('Pokemon created');
    }
  }

  updatePokemon(pokemon: Pokemon) {
    // Pendiente de establecer correctamente los tipos y la evolución
    console.log('Pokemon updated');
  }

}

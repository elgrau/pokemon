export class Pokemon {
    id: number;
    name: string;
    description: string;
    types: any[];
    nextEvolution: Pokemon;
    favorite: boolean;
    imageUrl: string = 'assets/img/pokemons/unknown.jpg';
}

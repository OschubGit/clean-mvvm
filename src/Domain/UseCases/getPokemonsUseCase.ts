/* export class PokemonsUseCases {
  constructor({ pokemonsRepository }: any) {
    this.pokemonsRepository = pokemonsRepository;
  }
  getPokemons = async () => {
    const response = await this.pokemonsRepository.getAll();
    return response;
  }
} */

import { PokemonEntity } from "../Entities/PokemonEntity";

export const getPokemonsUseCase = async (): Promise<PokemonEntity[] | null> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  if (!response.ok) {
    throw new Error('Failed to get all articles')
  }
  const data = await response.json()
  const res = data.results;
  return res
}
import { PokemonEntity } from "@/Domain/Entities/PokemonEntity";
import { getPokemonsUseCase } from "@/Domain/UseCases/getPokemonsUseCase";
import { useCallback, useState } from "react";

// Este archivo llama al caso de uso getPokemons y lo expone a la vista.
const usePokemonsModel = () => {
  const [pokemonsData, setPokemonsData] = useState<PokemonEntity[] | null>(null)

  const getPokemons = useCallback(async () => {
    const pokemons = await getPokemonsUseCase()
    setPokemonsData(pokemons)
  }, [])

  return {
    pokemons: pokemonsData,
    getPokemons
  }
}

export default usePokemonsModel;
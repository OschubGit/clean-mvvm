// este archivo sirve para conectar el modelo con la vista, es decir, para conectar la lógica de negocio con la vista.

import usePokemonsModel from "@/Infrastructure/Models/usePokemonsModel";

const usePokemonsViewModel = () => {
  const { pokemons, getPokemons } = usePokemonsModel();

  return {
    pokemons,
    getPokemons
  }
}

export default usePokemonsViewModel;

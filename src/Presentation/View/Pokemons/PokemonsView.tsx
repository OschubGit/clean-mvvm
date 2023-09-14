"use client";

import usePokemonsViewController from "./usePokemonsViewController";

const PokemonsView = () => {
  const { pokemons } = usePokemonsViewController();
  return pokemons ? (
    <ul role="list" className="divide-y divide-gray-100">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-sky-400">
                {pokemon.name}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-sky-200">{pokemon.url}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay pokemons</p>
  );
};

export default PokemonsView;

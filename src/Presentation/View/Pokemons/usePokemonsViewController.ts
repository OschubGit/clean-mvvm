'use client'

import { useEffect } from 'react';
import usePokemonsViewModel from './usePokemonsViewModel';

const usePokemonsViewController = () => {
  const { pokemons, getPokemons } = usePokemonsViewModel();

  useEffect(() => {
    getPokemons();
  }, []);

  return { pokemons, getPokemons };
}

export default usePokemonsViewController;
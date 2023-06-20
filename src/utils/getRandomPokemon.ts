import { type } from "os";
import pokemons from "./pokemons";

const MAX_DEX_id = 493;
export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokedexNumber = Math.floor(Math.random() * MAX_DEX_id + 1);

  if (pokedexNumber != notThisOne) return pokedexNumber;
  return getRandomPokemon(notThisOne);
};

export type pokemonPair = {
  name: string;
  spriteUrl: string;
  id: number;
}[];
export const getOptionsForVote: () => pokemonPair = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);
  return pokemons.filter((el) => el.id == firstId || el.id == secondId);
};

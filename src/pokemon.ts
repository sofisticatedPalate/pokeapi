import axios from 'axios';
import { PokeAPIResponse, EvolutionChainResponse, PokemonSpeciesResponse, Pokemon } from './types';
import { makeApiRequest } from "./api";

// Function to get a Pokemon by ID or name
export async function getPokemon(idOrName: string | number): Promise<Pokemon> {
  const response = await makeApiRequest(`/pokemon/${idOrName}`);
  return response.data;
}

// Function to get all Pokemons with pagination
export async function getAllPokemons(limit?: number, offset?: number): Promise<PokeAPIResponse> {
  const response = await makeApiRequest(`/pokemon`, { 
    params: { limit, offset } 
  });
  return response.data;
}

// Function to get a Pokemon's evolution chain (example of an abstraction)
export async function getPokemonWithEvolutionChain(idOrName: string | number): Promise<EvolutionChainResponse> {
  const pokemon = await getPokemon(idOrName);
  const species = await makeApiRequest(pokemon.species.url);
  const evolutionChain = await makeApiRequest(species.evolution_chain.url);
  return evolutionChain.data;
}

// Function to get a Pokemon's species information
export async function getPokemonSpecies(idOrName: string | number): Promise<PokemonSpeciesResponse> {
  const pokemon = await getPokemon(idOrName);
  const species = await makeApiRequest(pokemon.species.url);
  return species.data;
}

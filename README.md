# pokeapi SDK

## Background
This SDK is designed to interact with the [PokeAPI](https://pokeapi.co) using TypeScript.
Its functions interact specifially with these endpoints:
https://pokeapi.co/api/v2/pokemon
https://pokeapi.co/api/v2/generation

## Installation

**dependencies**
minimum versions of node & npm needed:
- node ^23.7.0
- npm ^11.1.0

### NPM

```
npm add https://github.com/sofisticatedPalate/pokeapi
```

Install dependencies:
`npm install`

>This SDK utilizes [Axios](https://axios-http.com) for handling calls to the API. This client is primarily used because of its built in behavior for parsing JSON responses and handling errors.

3. Build the SDK:
`npm run build`

## Usage
`getPokemon(idOrName: string | number)`

This function fetches a single Pokémon by its ID or name.

```import { getPokemon } from './pokemon.ts';

async function fetchPikachu() {
  try {
    const pikachu = await getPokemon('pikachu'); // or getPokemon(25)
    console.log(pikachu);
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
}
```
`getAllPokemons(limit?: number, offset?: number)`

This function fetches all Pokémon with optional pagination parameters.

```
import { getAllPokemons } from './pokemon.ts';

async function fetchAllPokemon() {
  try {
    const allPokemon = await getAllPokemons();
    console.log(allPokemon);

    // Fetch with pagination (10 Pokémon starting from the 11th)
    const paginatedPokemon = await getAllPokemons(10, 10);
    console.log(paginatedPokemon);
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
  }
}
```

`getPokemonWithEvolutionChain(idOrName: string | number)`

This function fetches a Pokémon and its evolution chain data.

```
import { getPokemonWithEvolutionChain } from './pokemon.ts';

async function fetchCharmanderEvolutionChain() {
  try {
    const charmanderEvolution = await getPokemonWithEvolutionChain('charmander');
    console.log(charmanderEvolution);
  } catch (error) {
    console.error('Error fetching evolution chain:', error);
  }
}
```

`getPokemonSpecies(idOrName: string | number)`

This function fectches the Species of a Pokémon.

```
import { getPokemonSpecies } from './pokemon.ts';
```

api.ts
using axios to handle HTTP requests
makeApiRequest: centralized way to make API calls with error handling

pokemon.ts
getPokemon, getAllPokemons, and getPokemonWithEvolutionChain functions
getPokemonWithEvolutionChain: abstraction the combined calls

generation.ts
getGeneration
getAllGenerations
getGenerationWithPokemon: abstractions with combined calls

## Testing

This SDK uses the [jest](https://jestjs.io) testing framework, which provides a reader-friendly and concise way to write and run tests.

To run tests:

```
 npm test
 ```

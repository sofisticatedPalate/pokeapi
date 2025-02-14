"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemon = getPokemon;
exports.getAllPokemons = getAllPokemons;
exports.getPokemonWithEvolutionChain = getPokemonWithEvolutionChain;
exports.getPokemonSpecies = getPokemonSpecies;
const api_1 = require("./api");
// Function to get a Pokemon by ID or name
function getPokemon(idOrName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.makeApiRequest)(`/pokemon/${idOrName}`);
        return response.data;
    });
}
// Function to get all Pokemons with pagination
function getAllPokemons(limit, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.makeApiRequest)(`/pokemon`, {
            params: { limit, offset }
        });
        return response.data;
    });
}
// Function to get a Pokemon's evolution chain (example of an abstraction)
function getPokemonWithEvolutionChain(idOrName) {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemon = yield getPokemon(idOrName);
        const species = yield (0, api_1.makeApiRequest)(pokemon.species.url);
        const evolutionChain = yield (0, api_1.makeApiRequest)(species.evolution_chain.url);
        return evolutionChain.data;
    });
}
// Function to get a Pokemon's species information
function getPokemonSpecies(idOrName) {
    return __awaiter(this, void 0, void 0, function* () {
        const pokemon = yield getPokemon(idOrName);
        const species = yield (0, api_1.makeApiRequest)(pokemon.species.url);
        return species.data;
    });
}
// Example usage:
// getPokemon(35).then(data => console.log(data)).catch(error => console.error(error));
// getPokemonWithEvolutionChain(35).then(data => console.log(data)).catch(error => console.error(error));

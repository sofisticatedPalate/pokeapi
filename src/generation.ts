import axios from 'axios';
import { Generation, PokeAPIResponse, Pokemon, PokemonGenerationsResponse } from './types';
import { makeApiRequest } from './api';

// Function to get a generation by ID or name
export async function getGeneration(idOrName: string | number): Promise<Generation> {
    const response = await makeApiRequest(`/generation/${idOrName}/`);
    return response.data;
}

// Function to get all generations
export async function getAllGenerations(): Promise<PokemonGenerationsResponse> {
    const response = await makeApiRequest('/generation');
    return response.data;
}

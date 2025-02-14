// Define common interfaces for API responses
export interface PokeAPIResponse {
  count?: number; 
  next?: string | null; 
  previous?: string | null; 
  results?: any; 
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
      ability: {
        name: string;
        url: string;
      };
    }[];
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    held_items: {
      item: {
        name: string;
        url: string;
      };
    }[];
    location_area_encounters: string;
    moves: {
      move: {
        name: string;
        url: string;
      };
    }[];
    species: {
      name: string;
      url: string;
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  }
  
  export interface Generation {
    id: number;
    name: string;
    main_region: {
      name: string;
      url: string;
    };
    pokemon_species: {
      name: string;
      url: string;
    }[];
  }

export interface EvolutionChainResponse {
  chain: {
    species: {
      name: string;
      url: string;
    };
    evolves_to: {
      species: {
        name: string;
        url: string;
      };
    }[];
  };
}

export interface PokemonSpeciesResponse {
  evolution_chain: {
    url: string;
  };
  genera: {
    genus: string;
  };
}

export interface PokemonGenerationsResponse {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: any;
}
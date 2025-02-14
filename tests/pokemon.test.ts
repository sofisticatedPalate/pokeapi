import { getAllPokemons } from '../src/pokemon';

describe('getAllPokemons', () => {
  it('should fetch all Pokemons with default pagination', async () => {
    const result = await getAllPokemons();
    expect(result.results).toBeDefined(); // Check if results array exists
    expect(result.results.length).toBeGreaterThan(0); // Check if there are results
  });

  it('should fetch Pokemons with specified limit and offset', async () => {
    const limit = 10;
    const offset = 5;
    const result = await getAllPokemons(limit, offset);
    expect(result.results.length).toBe(limit); // Check if the limit is respected
  });

  it('should handle pagination correctly', async () => {
    const firstPage = await getAllPokemons(10);
    const secondPage = await getAllPokemons(10, 10);
    expect(firstPage.next).toBeDefined(); // Check if there's a next page
    expect(secondPage.previous).toBeDefined(); // Check if there's a previous page
    // You can add more checks to compare results from different pages
  });
});
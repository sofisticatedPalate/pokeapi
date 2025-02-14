import { getGeneration, getAllGenerations } from '../src/generation';
import { Generation, PokeAPIResponse } from '../src/types';

describe('getAllGenerations', () => {
  it(' should fetch all generations', async () => {
    const result = await getAllGenerations();
    expect(result.results).toBeDefined();
    expect(result.results.length).toBeGreaterThan(0);
  });
});

describe('getGeneration', () => {
  it('should fetch a generation by ID or name', async () => {
    const result = await getGeneration(1);
    expect(result.id).toBe(1);
  });
});

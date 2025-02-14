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
const pokemon_1 = require("../src/pokemon");
describe('getAllPokemons', () => {
    it('should fetch all Pokemons with default pagination', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, pokemon_1.getAllPokemons)();
        expect(result.results).toBeDefined(); // Check if results array exists
        expect(result.results.length).toBeGreaterThan(0); // Check if there are results
    }));
    it('should fetch Pokemons with specified limit and offset', () => __awaiter(void 0, void 0, void 0, function* () {
        const limit = 10;
        const offset = 5;
        const result = yield (0, pokemon_1.getAllPokemons)(limit, offset);
        expect(result.results.length).toBe(limit); // Check if the limit is respected
    }));
    it('should handle pagination correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const firstPage = yield (0, pokemon_1.getAllPokemons)(10);
        const secondPage = yield (0, pokemon_1.getAllPokemons)(10, 10);
        expect(firstPage.next).toBeDefined(); // Check if there's a next page
        expect(secondPage.previous).toBeDefined(); // Check if there's a previous page
        // You can add more checks to compare results from different pages
    }));
    // Add more test cases as needed...
});

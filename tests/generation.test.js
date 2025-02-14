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
const generation_1 = require("../src/generation");
describe('getAllGenerations', () => {
    it(' should fetch all generations', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, generation_1.getAllGenerations)();
        expect(result.results).toBeDefined();
        expect(result.results.length).toBeGreaterThan(0);
    }));
});
describe('getGeneration', () => {
    it('should fetch a generation by ID or name', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, generation_1.getGeneration)(1);
        expect(result.id).toBe(1);
    }));
});

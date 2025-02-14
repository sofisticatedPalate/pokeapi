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
exports.getGeneration = getGeneration;
exports.getAllGenerations = getAllGenerations;
const api_1 = require("./api");
// Function to get a generation by ID or name
function getGeneration(idOrName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.makeApiRequest)(`/generation/${idOrName}/`);
        return response.data;
    });
}
// Function to get all generations
function getAllGenerations() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.makeApiRequest)('/generation');
        return response.data;
    });
}

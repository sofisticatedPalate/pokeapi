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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeApiRequest = makeApiRequest;
const axios_1 = __importDefault(require("axios"));
// Create an Axios instance with the base URL for the PokeAPI
const api = axios_1.default.create({
    baseURL: "https://pokeapi.co/api/v2",
});
// Generic function to make API requests
function makeApiRequest(url, config) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.request(Object.assign({ url }, config));
            return response;
        }
        catch (error) {
            // Handle errors here, e.g., log the error or throw a custom error
            console.error("API request failed:", error);
            throw error;
        }
    });
}

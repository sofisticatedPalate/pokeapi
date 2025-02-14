
import axios, { AxiosRequestConfig } from "axios";

// Create an Axios instance with the base URL for the PokeAPI
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// Generic function to make API requests
export async function makeApiRequest(
  url: string,
  config?: AxiosRequestConfig
): Promise<any> {
  try {
    const response = await api.request({
      url,
    ...config,
    });
    return response;
  } catch (error) {
    // Handle errors here, e.g., log the error or throw a custom error
    console.error("API request failed:", error);
    throw error;
  }
}
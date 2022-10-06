import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const FullApi = axios.create({
  baseURL: "",
});

export default api;

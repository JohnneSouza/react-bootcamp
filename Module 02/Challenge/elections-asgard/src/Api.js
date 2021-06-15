import axios from "axios";

const BASE_URL = "http://localhost:3001";

export async function fetchCharacters() {
  return await axios.get(`${BASE_URL}/candidates`);
}

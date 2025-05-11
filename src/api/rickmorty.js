const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacters(page = 1) {
  const response = await fetch(`${BASE_URL}?page=${page}`);
  const data = await response.json();
  return data.results;
}
const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacters() { /* er zijn oorspronkelijk 20 characters per page */ 
   
  const characters = [];               /*ik wou een 100tal characters ophalen en hiervoor moest ik 5 pagina's ophalen   */     

  for (let page = 1; page <= 5; page++) {
    const response = await fetch(`${BASE_URL}?page=${page}`);
    const data = await response.json();
    characters.push(...data.results);
  }

  return characters;
}
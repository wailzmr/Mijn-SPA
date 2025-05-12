import { getCharacters } from './api/rickmorty.js';
import { renderCharacterCard } from './components/card.js';
import { setupFilters } from './components/filters.js';
import { getFavorites } from './utils/storage.js';

const characterList = document.getElementById("character-list");
const toggleButton = document.getElementById("toggle-favorites");

let allCharacters =[];

function render(characters){
characterList.innerHTML = "";
characters.forEach(char => {
  characterList.appendChild(renderCharacterCard(char));
});
}

async function init() {

  allCharacters = await getCharacters();
  render(allCharacters);
  setupFilters(allCharacters,render);

  toggleButton.addEventListener("click", ()=> {
const favIds = getFavorites();
const favCharacters = allCharacters.filter (c => favIds.includes(c.id));
render(favCharacters);
  });

}

console.log("test 12");
init();
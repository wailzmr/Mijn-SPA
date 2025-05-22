import { getCharacters } from './api/rickmorty.js';
import { renderCharacterCard } from './components/card.js';       //Structurering in aparte modules en alles naar hier importeren om de main code netjes te behouden.   
import { setupFilters } from './components/filters.js';
import { getFavorites } from './utils/storage.js';
import { setupSorting } from './components/sort.js';
import { setupThemeSwitcher } from './utils/themes.js';

const characterList = document.getElementById("character-list");
const toggleButton = document.getElementById("toggle-favorites");

let allCharacters =[];
let showingFavorites = false;

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
  setupSorting(allCharacters,render);
  setupThemeSwitcher()
  toggleButton.addEventListener("click", ()=> {
if (!showingFavorites) {
    const favIds = getFavorites();
    const favCharacters = allCharacters.filter(c => favIds.includes(c.id));        //Wisselt tussen alle en favoriete personages.
    render(favCharacters);
    toggleButton.textContent = "Toon alle";
    showingFavorites = true;
  } else {
    render(allCharacters);
    toggleButton.textContent = "Toon favorieten";
    showingFavorites = false;
  }});
}

console.log("test 12");
init();
import { toggleFavorite, isFavorite } from "../utils/storage.js";
export function renderCharacterCard(character) {
  const template = document.getElementById("character-card-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector("img").src = character.image;
  clone.querySelector("h2").textContent = character.name;
  clone.querySelector(".species").textContent = character.species;
  clone.querySelector(".location").textContent = character.location.name;

  const favBtn = clone.querySelector(".favorite-btn");
  favBtn.textContent = isFavorite(character.id) ? "💖" : "⭐";

  favBtn.addEventListener("click", () => {
    toggleFavorite(character.id);
    favBtn.textContent = isFavorite(character.id) ? "💖" : "⭐";
  });
  
  return clone;
}

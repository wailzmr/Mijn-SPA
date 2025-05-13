import { toggleFavorite, isFavorite } from "../utils/storage.js";
export function renderCharacterCard(character) {
  const template = document.getElementById("character-card-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector("img").src = character.image;
  clone.querySelector("h2").textContent = character.name;
  clone.querySelector(".species").textContent = character.species;
  clone.querySelector(".location").textContent = `Location: ${character.location.name}`;
  clone.querySelector(".status").textContent = `Status: ${character.status}`;
  clone.querySelector(".gender").textContent = `Gender: ${character.gender}`;

  const favBtn = clone.querySelector(".favorite-button");
  favBtn.textContent = isFavorite(character.id) ? "💖" : "⭐";

  favBtn.addEventListener("click", () => {
    toggleFavorite(character.id);
    favBtn.textContent = isFavorite(character.id) ? "💖" : "⭐";
  });
  
  return clone;
}

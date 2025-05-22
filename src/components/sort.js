export function setupSorting(characters, renderFunction) {
  const sortSelect = document.createElement("select");
  sortSelect.innerHTML = `
    <option value="">Sorteer op </option>
    <option value="name">Naam</option>
    <option value="species">Soort</option>
    <option value="status">Status</option>
  `;
  sortSelect.id = "sort-select";
  document.querySelector("header").appendChild(sortSelect);     //Sorteert op naam, soort of status via dropdown.    

  sortSelect.addEventListener("change", () => {
    const sorted = [...characters].sort((a, b) => {
      const key = sortSelect.value;
      return a[key]?.localeCompare(b[key]);
    });
    renderFunction(sorted);
  });
}
export function setupFilters(characters, renderFunction){
const searchInput =  document.getElementById("search");
const filterSelect = document.getElementById("filter-species");

const speciesList = [...new Set(characters.map(c => c.species))];
speciesList.forEach(species =>{
    const opt = document.createElement("option");
    opt.value = species;
    opt.textContent = species;
    filterSelect.appendChild(opt);
});

function applyFilters(){
const search = searchInput.value.toLowerCase();
const selectedSpecies = filterSelect.value;

const filtered = characters.filter(char => 
    char.name.toLowerCase().includes(search) && 
    (selectedSpecies === "" || 
        char.species === selectedSpecies));

renderFunction(filtered);
}

searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);

}
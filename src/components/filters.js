export function setupFilters(characters, renderFunction){
const searchInput =  document.getElementById("search");
const filterSelect = document.getElementById("filter-species");

const speciesList = [...new Set(characters.map(c => c.species))];           //Filtert op gekozen soort.     
speciesList.forEach(species =>{
    const opt = document.createElement("option");         
    opt.value = species;
    opt.textContent = species;
    filterSelect.appendChild(opt);
});

let inputTimeout;

function applyFilters(){
const search = searchInput.value.toLowerCase();
const selectedSpecies = filterSelect.value;              //Filtert personages op naam op basis van invoerveld

if (search && search.length < 2) {
      
      console.warn("Zoekterm moet minstens 2 karakters bevatten.");     // dit zorgt ervoor dat je 2 of meer characters moet schrijven om iets te kunnen opzoeken
      return;
}

const filtered = characters.filter(char => 
    char.name.toLowerCase().includes(search) && 
    (selectedSpecies === "" || 
        char.species === selectedSpecies));

renderFunction(filtered);
}

searchInput.addEventListener("input", () => {
    clearTimeout(inputTimeout); 
    inputTimeout = setTimeout(applyFilters, 300); 
  });
filterSelect.addEventListener("change", applyFilters);

}
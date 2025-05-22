const KEY = "favorites";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function isFavorite(id){
return getFavorites().includes(id);

}

export function toggleFavorite(id){

    let favorites = getFavorites();
    if(favorites.includes(id)){
        favorites=favorites.filter(favId => favId !== id);              //Beheer van favorieten via lokale opslag.
    } else {
        
        favorites.push(id);

    }
    
    localStorage.setItem(KEY,JSON.stringify(favorites));

}
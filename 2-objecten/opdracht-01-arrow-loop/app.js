// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 
console.log("test");
// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.
const marvels = ["Guardians of the Galaxy", "Deadpool", "Avengers: Endgame", "Black Panther"];
// Maak een arrow function genaamd 'addMarvel'
const addMarvel = (marvelFilm) => {
    marvels.push(marvelFilm);
}
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
addMarvel("Black Widow");
// Roep de functie op (het klopt dat je nog niets ziet)
// Loop met een for/of loop door de array en toon alle items in de array in je console
for (let film of marvels){
    console.log(film);
}

//ik heb de console van VSC zelf moeten gebruiken omdat de console van FireFox- 
//niks liet zien. ik weet niet of dit hetzelfde is op andere browsers of computers
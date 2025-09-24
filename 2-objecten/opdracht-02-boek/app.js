// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
const book = {
    title:"Encyclopaedia Eorzea the World of Final Fantasy XIV Volume I",
    author:"Square Enix",
    publisher:"Square Enix Books",
    releaseyear:2022,
    amountsold:1000000, //ik kan niet de actuele data vinden voor dit
    price:"€30,00",

};
// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.
const output = document.querySelector('.output');
const bericht =`
<p>Titel: ${book.title} \n
Auteur: ${book.author} \n
Uitgeverij: ${book.publisher} \n
Jaar van uitkomst: ${book.releaseyear} \n
Aantal verkocht: ${book.amountsold}  \n
Prijs: ${book.price}</p>
`;
console.log(bericht);
console.log(book.title);
console.log("test");
//verschillende console tests, niks wilt loggen dus ik ga verder met andere opdrachten en ik kijk later wat er mis is
const berichtToevoegen = (a) =>{
    output.innerHTML = a;
    
}


// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!
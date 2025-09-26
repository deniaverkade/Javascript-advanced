// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.
const person = {
    name: "Harry",
    age: "7543354",
    dateOfBirth: "23-5-1987",
    sex: "M",
    alive:"Nee",
    hobbies: ["Vissen","Crypto mijnen","Tuinieren","Vogels kijken"]
}
// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:
const output = document.querySelector('.output');
const message =`
<p>
Naam: ${person.name} <br>
Leeftijd: ${person.age} <br>
Geboortedatum: ${person.dateOfBirth} <br>
Geslacht: ${person.sex} <br>
In leven: ${person.alive} <br>
Hobby's: ${person.hobbies} <br>
`;
// Het object moet ook de volgende methods bevatten:
const newName = document.getElementById("newName").value;
console.log("Nieuwe naam: "+newName);
function changeName() {
    Object.defineProperty(person,"name", {value : newName});
    output.innerHTML= message;
    console.log(message);

}
//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
const lifeStatus = document.querySelector("#lifeStatus").value;
console.log(lifeStatus);


    
   function changeLife() {
    if (document.querySelector("#aliveYes").checked) {
        Object.defineProperty(person,"alive", {value : "Ja"});
        output.innerHTML= message;
        console.log(message);
    } if(document.querySelector("#aliveNo").checked) {
        Object.defineProperty(person,"alive", {value : "Nee"});
        output.innerHTML= message;
        console.log(message);
    }
    }


//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.
const newHobby = document.forms["hobbyChange"]["newHobby"].value;
console.log("Nieuwe Hobby: "+newHobby);
function addHobby() {
    person.hobbies.push();
    output.innerHTML= message;
    console.log(message);
    console.log();
}
// Toon de wijzigingen op het scherm.
changeName(newName);
addHobby(newHobby);

output.innerHTML= message;
// Gebruik geen arrow function in een object!

//ik krijg dit niet aan het werk
let output = document.querySelector("#list");
let out = "";

const dateToday ="03-11";
const birthdayCounter= 0;

fetch("./birthday.json")
.then((response) => response.json())
    .then((birthday)=> {
        for (let day of birthday) {
            if (day.dateOfBirth.startsWith(dateToday)===true) {
                out += `
                <img src="${day.picture}">
                <h2>${day.name}</h2>
                <p>${day.age} jaar</p>
                `;
                console.log("this code works");
                console.log(out);
                output.innerHTML = out;
            }
        }
    })
let output = document.querySelector("#list");
let birthdaysToday = document.querySelector("#birthdaysToday");
let out = "";

const dateToday ="03-11";
let dayCount = 0;

fetch("./birthday.json")
.then((response) => response.json())
    .then((birthday)=> {
        console.log(birthday);
        
        for (let day of birthday) {
            // if (day.dateOfBirth.startsWith(dateToday)===true) {
              //  dayCount = dayCount +1;
                
                out += `
                <img src="${day.picture}">
                <h2>${day.name}</h2>
                <p>${day.age} jaar - ${day.dateOfBirth}</p>
                `;
                console.log("this code works");
                console.log(out);
             
           // }
               output.innerHTML = out;
        
        }
            birthdaysToday.innerHTML = `<h1>Birthdays today: ${birthday.length}</h1>`;
    })

    function clearList() {
        out = "";
        output.innerHTML = out;
        dayCount = 0;
        birthdaysToday.innerHTML = `<h1>Birthdays today: ${dayCount}</h1>`;
    }


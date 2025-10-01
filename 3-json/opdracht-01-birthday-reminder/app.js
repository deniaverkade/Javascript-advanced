output = document.querySelector("");
out = "";

dateToday ="";
birthdayCounter= 0;

fetch("./birthday.json")
.then((response) => response.json())
    .then((birthday)=> {
        for (let day of birthday) {
            if (day.dateOfBirth)
        }
    })
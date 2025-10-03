let outputName = document.querySelector(".nameContent");
let outputFlag = document.querySelector(".flagContent");

let out1 = "";
let out2 = "";

fetch(`https://restcountries.com/v3.1/all?fields=name,flags`)
.then ((response)=> response.json())
    .then((data) => {
        for (let i of data) {
            out1 += `
            <div class="item1 name${i.name.common}">
            ${i.name.common}
            </div>
            `;
            outputName.innerHTML= out1;
            //console.log(out1);
        }
    } )

    fetch(`https://restcountries.com/v3.1/all?fields=name,flags`)
.then ((response)=> response.json())
    .then((data) => {
        for (let i of data) {
            out2 += `
            <div class="item2 flag${i.name}">
            <img src="${i.flags.png}">
            </div>
            `;
            outputFlag.innerHTML= out2;
            //console.log(out2);
        }
    } )

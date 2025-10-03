let output = document.querySelector("#listAdd");
let out = "";

fetch(`https://fortnite-api.com/v2/cosmetics/new`)
.then((response) => response.json())
    .then((data)=> {
        console.log(data);
        for (let d of data.data.items.br){
            console.log(d);
            out += `
            <table class="theList" id="listContent">
            <tr>
                <td id="cosid">${d.id}</td>
                <td>${d.name}</td>
                <td>${d.description}</td>
                <td>${d.type.value}</td>
                <td>${d.rarity.value}</td>
                <td>${d.set.value}</td>
                <td>C${d.introduction.chapter}S${d.introduction.season}</td>
                <td><img src="${d.images.icon}"></td>
                <td>${d.added}</td>
            </tr>
            </table>
            `;
            output.innerHTML = out;
            
        }
        }
           )



// Opdracht 4.2: Todo Lijst
console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = []; // Array van strings (geen objecten!)

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = localStorage.setItem("taak", input);
    
    if (taakTekst === '') {
        alert('Voer een taak in!');
        return;
    }
    
    // TODO: Voeg taak toe aan array (gewoon de string)
    taken.push(input);
    
    // TODO: Sla taken op in localStorage
    /* jouw code hier - gebruik JSON.stringify */
    let stringifyTaak = localStorage.setItem("opgeslagenTaak",JSON.stringify(input));
    
    // Maak input leeg en update UI

    toonTaken();
}

function laadTaken() {
    // TODO: Haal taken op uit localStorage
    localStorage.getItem("opgeslagenTaak");
    
    if (localStorage.getItem("opgeslagenTaak")) {
        // TODO: Parse JSON naar array
        let taken = JSON.parse(stringifyTaak);
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    if (taken.length === 0) {
        container.innerHTML = '<p>Geen taken toegevoegd.</p>';
        return;
    }
    
    // TODO: Genereer HTML voor alle taken
    const takenHTML = taken.map((taak, index) => `
        <div class="taak">
            ${taakTekst}
            <button onclick="verwijderTaak(${index})">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = takenHTML;
    
    // TODO: Update teller
    document.getElementById('aantal-taken').textContent = length(taken);
}

function verwijderTaak(index) {
    // TODO: Verwijder taak op specifieke index
    taken.splice(0,opgeslagenTaken);
    
    // TODO: Sla taken op en update UI
    /* jouw code hier */;
    toonTaken();
}

function wisAlleTaken() {
    if (confirm('Weet je zeker dat je alle taken wilt wissen?')) {
        // TODO: Maak array leeg
        taken = /* jouw code hier */;
        
        // TODO: Verwijder uit localStorage
        localStorage.removeItem("opgeslagenTaak")
        
        toonTaken();
    }
}

// TODO: Initialisatie bij pagina laden
addEventListener("onload",voegTaakToe());
// Opdracht 3.4: Email Validatie
console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    // TODO: Check of email geldig is
    // Regels: moet @ bevatten, geen spaties, eindigt op .com/.nl/.org
    
    const schoonEmail = email.toLowerCase().trim();
    
    // Check @ aanwezig
    if (!schoonEmail === email.includes("@")) {return false;}
    
    // Check geen spaties
    if (!schoonEmail === email.trim()) {return false;}
    
    // Check geldig einde
    const geldigeEindes = ['.com', '.nl', '.org'];
    return schoonEmail.endsWith(geldigeEindes);
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});
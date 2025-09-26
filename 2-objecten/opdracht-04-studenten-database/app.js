const students = [
  {
    id: 1,
    naam: 'Emma van Dijk',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: 'Liam de Boer',
    leeftijd: 19,
    studie: 'Backend Development',
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: 'Sophie Jansen',
    leeftijd: 21,
    studie: 'Frontend Development',
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: 'Daan Peters',
    leeftijd: 22,
    studie: 'Fullstack Development',
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: 'Evi de Wit',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.9,
    actief: true,
  },
];

 function toonAlleStudenten() {
//   // 📝 WAT MOET JE DOEN:
//   // 1. Loop door de hele 'students' array
//   // 2. Maak voor elke student een HTML article element
//   // 3. Voeg de HTML toe aan het element met id 'studenten-lijst'
//   //
//   // 💡 TIP: Gebruik array.map() om HTML te maken en innerHTML om toe te voegen
//   //
//   // 🎯 VOORBEELD HTML per student:
//   // <article class="actief"> (of "inactief")
//   //     <strong>Emma van Dijk</strong> (20 jaar)<br>
//   //     📚 Frontend Development<br>
//   //     📊 Cijfer: 8.5 | Status: ✅ Actief
//   // </article>
for (let i in students) {
  const studentActief = "";
  if (students[i].actief===true){
    studentActief = "✅ Actief"
  } if (students[i].actief===false) {
    studentActief = "🚫 Inactief"
  }
  const article = `
  <article class="${students[i].actief}">
  <strong>${students[i].naam}</strong>(${students[i].leeftijd})<br>
  📚 ${students[i].studie}<br>
  📊Cijfer: ${students[i].cijfer} | Status: ${studentActief}
  </article>`;


  document.getElementById("studenten-lijst").innerHTML=article;
}
}
students.map(toonAlleStudenten);




function toonActieveStudenten() {
  // 📝 WAT MOET JE DOEN:
  // 1. Filter de students array op studenten waar actief === true
  // 2. Toon alleen die gefilterde studenten (gebruik dezelfde HTML als hierboven)
  //
  // 💡 TIP: Gebruik array.filter() en dan dezelfde logica als toonAlleStudenten()
const actieveStudenten = students.filter(student => student.actief===true);
for (let i in actieveStudenten) {
  const studentActief = "";
  if (students[i].actief===true){
    studentActief = "✅ Actief"
  } if (students[i].actief===false) {
    studentActief = "🚫 Inactief"
  }
  const article = `
  <article class="${students[i].actief}">
  <strong>${students[i].naam}</strong>(${students[i].leeftijd})<br>
  📚 ${students[i].studie}<br>
  📊Cijfer: ${students[i].cijfer} | Status: ${studentActief}
  </article>`;


  document.getElementById("studenten-lijst").innerHTML=article;
}

}

function toonTopStudenten() {
  // 📝 WAT MOET JE DOEN:
  // 1. Filter de students array op studenten met cijfer >= 8.0
  // 2. Toon alleen die gefilterde studenten
  //
  // 💡 TIP: Gebruik array.filter() met een conditie op het cijfer
  const hogeCijfers = students.filter(student => student.cijfer >= 8.0);
  for (let i in hogeCijfers) {
  const studentActief = "";
  if (students[i].actief===true){
    studentActief = "✅ Actief"
  } if (students[i].actief===false) {
    studentActief = "🚫 Inactief"
  }
  const article = `
  <article class="${students[i].actief}">
  <strong>${students[i].naam}</strong>(${students[i].leeftijd})<br>
  📚 ${students[i].studie}<br>
  📊Cijfer: ${students[i].cijfer} | Status: ${studentActief}
  </article>`;


  document.getElementById("studenten-lijst").innerHTML=article;
}
}

// 🚀 START DE APPLICATIE - roep deze aan als de pagina laadt
//toonAlleStudenten();
addEventListener("onload", toonAlleStudenten());

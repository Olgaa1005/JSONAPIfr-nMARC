// Skapa ett enkelt JS-objekt
let myObj = {
  firstName: "Marcus",
  age: 36,
  occupation: "Educator"
}

//Strigifiera objket till JSON string
let myJson = JSON.stringify(myObj, null, 4)

//Skriv ut JSON string
console.log(myJson)

//Konvertera JSON string till ett nytt objekt
let newStruct = JSON.parse(myJson)

// Kan använda isArray för att kolla dataTypen och struktur
//Array.isArray()

console.log(newStruct)

//Funktino som hämtar data från JSON fil
async function getJsonFromSource(source) {
  //Använd metoden Fetch för att hämta data
  let resp = await fetch(source)


  console.log(resp)
  //Hämta JSONData från Response
  let data = await resp.json()

  //Skriv ut data
  console.log(data);

  //Clear output
  document.getElementById("jsonOutput").innerText = ""

  for (let x in data) {
    let child = document.createElement("p")
    child.innerText = `${x}: ${data[x]}`
    document.getElementById("jsonOutput").append(child)
  }

  //Skriv ut namn i nameOutput
  document.getElementById("nameOutput").innerText = data["name"]
}

//await getJsonFromFile("./data.json")

document.getElementById("btnJson").addEventListener('click', async () => {
  await getJsonFromSource("./data.json")
})

document.getElementById("btnIss").addEventListener('click', async () => {
  await getJsonFromSource("https://api.wheretheiss.at/v1/satellites/25544")
})
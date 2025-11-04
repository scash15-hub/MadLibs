let name = prompt("Your Name");
let number = prompt("Favorite Number");
let animal = prompt("Spirit Animal");
let friendsName = prompt("Best Friends Name");
let food = prompt("Favorite Food");
let state = prompt("Name a State");
let weather = prompt("Weather Outside");
let pluralNoun = prompt("Plural Noun");
let adjective = prompt("Adjective");
let adjective1 = prompt("Adjective");
let funny = prompt("Funny Name for a Plane");
let verb = prompt("Verb");
let adjective2 = prompt("Adjective");
let verbing = prompt("Verb ending in -ing");
let animal1 = prompt("Favorite Animal");
let exaggeration = prompt("Exaggeration");
let celebertyName = prompt("Celeberty Name");
let bodyPart = prompt("Body Part");
let number1 = prompt("Lucky Number");
let pluralNoun1 = prompt("Plural Noun");
let carBrand = prompt("Car Brand");

let story = `<p>${name} and ${friendsName} decided to take a ${adjective} vacation to ${state}. You packed your ${pluralNoun}, stuffed in ${number} ${food}</p>

<p>At the airport, everything seemed ${adjective1} — until your flight got delayed because someone’s ${animal} got stuck in the jet engine. When you finally boarded, the flight attendant smiled and said, “Welcome aboard ${funny}, have a ${adjective2} flight.”</p>

<p>Halfway through the flight, the captain announced, “Uh-oh… we’ve hit a ${weather} spot!” The plane began to ${verb}, drinks started ${verbing} through the air, and a passenger screamed, “My ${animal1} just escaped!”</p>

<p>${name} and ${friendsName} held on tight, yelling ${exaggeration} as lightning flashed brighter than ${celebertyName} on the red carpet. The turbulence got so wild that even the pilot’s ${bodyPart} started shaking.</p>

<p>Finally, after what felt like ${number1} hours, the storm cleared, and everyone cheered like ${pluralNoun1} at a concert. You landed safely in ${state}.</p>

<p>${name} and ${friendsName} agreed: next time, maybe we will just take a ${carBrand} instead.</p>`;

document.getElementById("madlib-output").innerHTML = story;
/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

let name = prompt("Your Name");
let number = prompt("Favorite Number");
let animal = prompt("Spirit Animal");
let friendsName = prompt("Best Friends Name");
let color = prompt("Favorite Color");
let food = prompt("Favorite Food");
let state = prompt("Name a State");
let feeling = prompt("What are You feeling");
let about = prompt("Something to describe you");
let weather = prompt("Weather Outside");
let action = prompt("Action");
let pluralNoun = prompt("Plural Noun");
let adjective = prompt("Adjective");
let adjective1 = prompt("Adjective");
let funny = prompt("Funny Name of a Plane");
let verb = prompt("Verb");
let adjective2 = prompt("Adjective");
let verbing = prompt("Verb ending in -ing");


// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/
// ${number}
let story = `<p>${name} and ${friendsName} decided to take a ${adjective} vacation to ${state}. You packed your ${pluralNoun}, stuffed in ${number} ${food}</p>

<p>At the airport, everything seemed ${adjective1} — until your flight got delayed because someone’s ${animal} got stuck in the jet engine. When you finally boarded, the flight attendant smiled and said, “Welcome aboard ${funny}, have a ${adjective2} flight.”</p>

<p>Halfway through the flight, the captain announced, “Uh-oh… we’ve hit a ${weather}!” The plane began to ${verb}, drinks started (verb ending in -ing) through the air, and a passenger screamed, “My (animal) just escaped!”</p>

<p>You and (friend’s name) held on tight, yelling (funny exclamation) as lightning flashed brighter than a (celebrity name) on the red carpet. The turbulence got so wild that even the pilot’s (body part) started shaking.</p>

<p>Finally, after what felt like (number) hours, the storm cleared, and everyone cheered like (plural noun) at a concert. You landed safely in (place) — a little dizzy, slightly sticky, but totally (adjective).</p>

<p>You and your friend agreed: next time, maybe you’ll just take a (vehicle) instead.</p>`;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

document.getElementById("madlib-output").innerHTML = story ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/

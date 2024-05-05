/**
 * HANDLEBARS WILL NOT WORK USING JS MODULES!!
 * This is why I am adding the data and my helper functions here (in the same file) instead
 */

// data
var cast = {
  characters: [
    {
      name: "Jon Snow",
      shortCode: "jon-snow",
      actor: "Kit Harrington",
      house: "Stark",
      location: "The Wall",
    },
    {
      name: "Tyrion Lannister",
      shortCode: "tyrion",
      actor: "Peter Dinklage",
      house: "Lannister",
    },
    {
      name: "Brienne of Tarth",
      shortCode: "brienne",
      actor: "Gwendoline Christie",
      house: "Clegane",
      location: "unknown",
    },
    {
      name: "Eddard Stark",
      shortCode: "ned-stark",
      actor: "Sean Bean",
      house: "Stark",
      location: "Winterfell",
    },
    {
      name: "Sandor Clegane",
      shortCode: "the-hound",
      actor: "Rory McCann",
      house: "Clegane",
      location: "unknown",
    },
  ],
};

// helper functions
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
};

// THE CHARACTER TEMPLATE
//==========================

const charTemplate = getElement("#character-template"); // get the script template from the index.html
const charHTML = charTemplate.innerHTML; // get the html only from that same template
// console.log(charHTML) => print the html that we have inside the template script
const compiledCharTemplate = Handlebars.compile(charHTML); // assign a new Handlebars compiler and pass in the charHTML

// TESTING
// ===============

//  passing a single object

// passing a single object  to test
// must have the same keys what we have in both the variables in the DOM script AND the data as they are the same

// console.log(
//   "testing =>",
//   compiledCharTemplate({
//     name: "david",
//     location: "Sydney",
//   })
// );

// passing a single object from the characters data

// console.log(
//   "second character from data =>",
//   compiledCharTemplate(cast.characters[1])
// );

// PASSING DATA BACK TO THE DOM (index.html)

const listDOM = getElement(".character-list-container"); // get the UL DOM Element
// test => listDOM.innerHTML = compiledCharTemplate(cast.characters[0]);

// set the html of the listDOM to the compiler using the data as the param
listDOM.innerHTML = compiledCharTemplate(cast); // use the name of the variable here

// NOW GO BACK INTO THE INDEX.HTML file, use the #EACH handlebars helper and pass in the characters key as the iterator
/**
 *  {{#each characters}}
          <li class="character">
            <img src="images/{{shortCode}}.jpg" />
            <h2>{{name}}</h2>
            <p>Actor: {{actor}}</p>
            <p>House: {{house}}</p>
            <p>Whereabouts: {{location}}</p>
          </li>
        {{/each}}
*/

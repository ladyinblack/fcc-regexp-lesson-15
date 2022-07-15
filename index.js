// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Find One or More Criminals in a Hunt</h1>`;

/** TODO:
 * Write a green regex that finds one or more criminals within a group of other people.  A criminal is represented by the capital letter C.
 
 let reCriminals = /./; // Change this line
 */

function findCriminals(str) {
  let reCriminals = /C+/;
  return str.match(reCriminals);
}

console.log(findCriminals('C'));
console.log(findCriminals('CC'));
console.log(findCriminals('P1P5P4CCCcP2P6P3'));
console.log(findCriminals('P6P2P7P4P5CCCCCP3P1'));
console.log(findCriminals(''));
console.log(findCriminals('P1P2P3'));
console.log(
  findCriminals('P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3')
);

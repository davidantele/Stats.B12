// TODO: Create an array named `myInstruments` that contains the following instruments as strings: flute, clarinet, saxophone, trumpet, and trombone.
const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

// TODO: Use array methods to transform it into `["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"]`
const itemRelocate = myInstruments.splice(2, 1);
myInstruments.unshift(itemRelocate[0]);
myInstruments.push("tuba", "bassoon");
console.log(myInstruments);
/**
 * @param {string[]} instruments
 * @returns {string} the first instrument in `instruments`
 */
function getFirstInstrument(instruments) {
  return myInstruments.shift();
}
getFirstInstrument(myInstruments);
/**
 * @param {string[]} instruments
 * @returns {string} the last instrument in `instruments`
 */
function getLastInstrument(instruments) {
  // TODO
}

/**
 * @param {string[]} instruments
 * @returns {string[]} a new array containing the first and last instruments of `instruments`
 */
function getFirstAndLastInstrument(instruments) {
  // TODO
}

/**
 * @param {string[]} instruments
 * @returns {string[]} the first three instruments of `instruments`
 */
function getFirstThreeInstruments(instruments) {
  // TODO
}

/**
 * OPTIONAL CHALLENGE
 * Hint: What condition should an element pass before adding it to an output array?
 * @param {string[]} instruments
 * @returns {string[]} all instruments that start with the letter "t"
 */
function getTInstruments(instruments) {
  // TODO
}

/**
 * OPTIONAL CHALLENGE
 * Hint: Keep track of the instrument with the longest name you have seen _so far_
 * as you iterate through the array. When should it be updated?
 * @param {string[]} instruments
 * @returns {string} the instrument with the longest name
 */
function getLongestNamedInstrument(instruments) {
  // TODO
}

const name = "sonu"
const repoCount = 10

// console.log(name + repoCount + " repocount");
console.log(`Hello my name is ${name} and my repocount is ${repoCount} `);

// ` this is called backTicks 
const gameName = new String('swastik-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName);

const newString = gameName.substring(0, 4)
//It will provide a substring 
console.log(newString);
const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

//**************************************************************

//Trim method trims the spaces and gives the content
// "  soumya " => "soumya"

//There are two more methods in Trim such as 
//1. trimStart() / trimLeft() => Trims from the start 
// "  Soumya   " + trimStart() => "soumya  "

//2. trimEnd() / trimRight
// "  Soumya   " + trimstart() => "  Soumya"


const newStringOne = "  Soumya  "
console.log(newStringOne);
console.log(newStringOne.trim());

//************************************ */

const url = "https://code.com/home%20care"
console.log(url.replace('%20', '-'))

console.log(url.includes('hit'))
console.log(gameName.split('-'));

let word = "ନମସ୍କାର"
let index = word.length - 1;
console.log(index);
console.log(word);
console.log(word.length);

console.log(word.charAt(2));
console.log(word.charCodeAt(index));


// //************Methods in String ***************************************88 */
// Constructor
// String(): This function creates a new string object.
// Methods
// endsWith(): Checks if the string ends with a specified substring.
// fixed(): Displays the string as fixed-pitch text (monospaced font).
// fontcolor(): Sets the color of the string's text (this method is outdated and not recommended for use).
// fontsize(): Sets the size of the string's text (also outdated and not recommended for use).
// includes(): Checks if the string contains a specified substring.
// indexOf(): Finds the first occurrence of a specified substring in the string and returns its position.
// isWellFormed(): Checks if the string is well-formed according to the Unicode standard.
// italics(): Displays the string in italic text (outdated method).
// lastIndexOf(): Finds the last occurrence of a specified substring in the string and returns its position.
// length: Returns the length (number of characters) of the string.
// link(): Creates a hyperlink (outdated method).
// localeCompare(): Compares two strings in the current locale.
// match(): Searches the string for a match against a regular expression and returns the matches.
// matchAll(): Returns an iterator of all matches against a regular expression.
// normalize(): Returns the Unicode Normalization Form of the string.
// padEnd(): Pads the end of the string with another string until it reaches a specified length.
// padStart(): Pads the start of the string with another string until it reaches a specified length.
// repeat(): Repeats the string a specified number of times.
// replace(): Replaces a specified value (or regular expression) with another value in the string.
// replaceAll(): Replaces all occurrences of a specified value (or regular expression) with another value in the string.
// search(): Searches the string for a match against a regular expression and returns the position of the match.
// slice(): Extracts a section of the string and returns it as a new string.
// small(): Displays the string in a small font (outdated method).
// split(): Splits the string into an array of substrings based on a specified separator.
// startsWith(): Checks if the string starts with a specified substring.
// strike(): Displays the string with a strikethrough (outdated method).
// sub(): Displays the string as subscript text (outdated method).
// substr(): Extracts a part of the string, starting at a specified position and for a specified number of characters (outdated, use substring or slice instead).
// substring(): Extracts a part of the string, between two specified positions.
// sup(): Displays the string as superscript text (outdated method).
// toLocaleLowerCase(): Converts the string to lowercase, taking into account the host's current locale.
// toLocaleUpperCase(): Converts the string to uppercase, taking into account the host's current locale.
// toLowerCase(): Converts the string to lowercase.
// toString(): Returns a string representing the object.
// toUpperCase(): Converts the string to uppercase.
// toWellFormed(): Converts the string to a well-formed Unicode string.
// trim(): Removes whitespace from both ends of the string.
// trimEnd()/trimRight(): Removes whitespace from the end of the string.
// trimStart()/trimLeft(): Removes whitespace from the start of the string.
// valueOf(): Returns the primitive value of the string object.
// [Symbol.iterator]: Allows the string to be iterable (for example, in a for...of loop).
// These methods are all part of JavaScript's String prototype, providing various functionalities to manipulate and interact with string data.
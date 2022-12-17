/*let noun = 'soup';
let verb = 'eat';
let place = 'Vermont';

function declarationFunction(param1,param2,param3) {
    return `I would like to ${param2} ${param1} in ${param3}`;
}

let comments = declarationFunction(noun, verb, place);
console.log(comments);

let food = "burger";
let action = "make";
place = "Indiana";

let comment2 = declarationFunction(food, action, place);
console.log(comment2);
*/

let myString = 'the rain in spain falls MAINLY on the PLAIN';

function capitalize(string) {
  let firstLetter = string[0];
   firstLetter = firstLetter.toUpperCase();
   let restOfWord = string.slice(1).toLowerCase();

  let fullWord = firstLetter + restOfWord;
  return fullWord;
}

// Your Code Goes Here
function titleize(string) {
  
  let splitString = string.split(" ");
  console.log(splitString);
  let mapString = splitString.map(capitalize(splitString));
  console.log(mapString);
  
  let newString = mapString.join(" ");



}
titleize(myString);
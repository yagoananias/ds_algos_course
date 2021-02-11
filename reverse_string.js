function reverseStr(str) {
  let reversed = "";

  for(let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

//console.log(reverseStr("Olá"));

//using a modern Javascript with arrow functions

const reverseArrowFunction = strNew => strNew.split('').reverse().join('');

console.log(reverseArrowFunction("Brabo memo"));
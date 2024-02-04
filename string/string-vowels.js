let sentence = "java script is a very  good programming language";
let whiteSpace = sentence.replace(/\s/g, "");
console.log(whiteSpace);
let isInclude = whiteSpace.includes("a" && "e" && "i" && "o" && "u");
console.log(isInclude);
   
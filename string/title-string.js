// ************while loop**********
// let sentence = "jaVa sCript Is a Very goOd proGrAmmiNg laNGUage";
// let words = sentence.split(" ");
// console.log(words);
// let wordsLength = words.length
// console.log(wordsLength);
// let i = 0;
// while(i < wordsLength){
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
//    let woredsloop = words[i];
//    console.log(woredsloop);
//    i++
// }
// let finished = words.join(" ");
// console.log(finished);

// **********for loop**************

let sentence = "jaVa sCript Is a Very goOd proGrAmmiNg laNGUage";
let words = sentence.split(" ");
console.log(words);
let wordsLength = words.length;
console.log(wordsLength);
for(let i = 0; i < wordsLength; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    let wordsloop = words[i];
    console.log(wordsloop);
} 
let finished = words.join(" ");
console.log(finished);

let sentence = "A good friend is a property for a man to make A good deAl";
let whiteSpace = sentence.replace(/\s/g, "");
let isArry = whiteSpace.split("");
console.log(isArry);

let j = 0;

// ************while loop**********
// let i = 0;
// while(i < isArry.length){
//     if((isArry[i] === "a") || (isArry[i] === "A")){
//         j++
//     }
//     i++
// }
// console.log(j);

// *********for loop************
for(let i = 0; i < isArry.length; i++){
    if((isArry[i] === "a") || (isArry[i] === "A")){
        j++
    }
}
console.log(j);


let sentence = "java script is a very good programming language";
let whiteSpace = sentence.replace(/\s/g, "");
let isArry = whiteSpace.split("");
console.log(isArry);
// ******while loop**********
// let i = 0;
// let j = 0;
// while(i < isArry.length){
//     if(isArry[i] === "a"){
//         j++
//     }
//     i++
// }
// console.log(j);     

// ***********for loop***********
let j = 0;
for(let i = 0; i < isArry.length; i++){
    if(isArry[i] === "a"){
        j++
    }
}
console.log(j);

   




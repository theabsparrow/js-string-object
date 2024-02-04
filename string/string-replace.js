let example = "example x and eXample X"
let findx = example.includes("x");


let findX = example.includes("X");
let isX
console.log(findX);
if(findx === true){
    let result = example.replace(/x/g, "y");
    console.log(result);
}
if(findX === true){
    let resultX = example.replace(/X/g, "Y");
    console.log(resultX);
}

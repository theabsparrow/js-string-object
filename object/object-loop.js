let studentId = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
console.log(studentId);
let stuProperty = Object.keys(studentId);
let stuvalue = Object.values(studentId);
console.log(stuProperty);
console.log(stuvalue);
for(let key in studentId){
    let keys = studentId[key];
    const value = keys;
    const type = typeof value;
    console.log(`${key}: ${value}  | type: ${type}`);
    }

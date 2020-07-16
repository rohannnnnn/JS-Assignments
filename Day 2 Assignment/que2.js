console.log("Hiii");

//Creating an array
let person = ["Berlin","Rio","Tokyo","Nairobi","Professor"];

//Access the Elements of an array - access an array element by referring to the index number.
//To access the value of the first element 
console.log(person[0]);

//To access the last element
console.log(person[person.length-1]);

//Changing an array element
person[0] = "Moscow";
console.log(person[0]);

//Access the full Array
console.log(person);

//Length
console.log(person.length);

//Adding array element
person.push("Denver");
console.log(person);

//typeof Array - it returns object because a JavaScript Array is an Object.
console.log(typeof person);

//Indexof element in an array
console.log(person.indexOf('Nairobi'));

//Adding element in front of an array
person.unshift('Oslo');
console.log(person);

//Splice method it is used to add or remove items from array and returned the removed items
person.splice(2,0,"Monica","Helsinki");
console.log(person);
console.log("Question 1");

let arr = [];
let n = parseInt(prompt("Enter the number of elements"));
for(let i=0; i<n;i++){
    arr[i] = i+1;
}
console.log(arr);
let odd = arr.filter(el=>el % 2 != 0);
console.log(odd);
let cube = odd.map(el => el**3);
console.log(cube); 
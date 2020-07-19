//console.log("hello");



let n = Number(prompt("Enter a Number"));
console.log(`Prime numbers till ${n}: \n`);
nextPrime:
for(let i=2;i<=n;i++){
    for(let j=2;j<i;j++){
        if(i%j==0) continue nextPrime;
    }
    console.log(i);
}
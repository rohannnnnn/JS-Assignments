// console.log("Hii");

let sales = prompt("Enter the sales ");

let commission;

if(sales <=5000){
     commission = sales*0.02;
    console.log(`The total commission is   ${commission} `);
}
else if(sales >=5001 && sales <= 10000){
    commission = sales*0.05;
    console.log(`The total commission is   ${commission} `);
}
else if(sales >= 10001 && sales <= 20000){
    commission = sales*0.07;
    console.log(`The total commission is ${commission} `);
}
else {
    commission = sales*0.1;
    console.log(`The total commission is ${commission} `);
}
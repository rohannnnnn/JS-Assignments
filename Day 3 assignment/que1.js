//console.log("Hii");

let num = prompt("Enter the number to check number is Even or odd");

isEvenorOdd();

function isEvenorOdd(){
    if(num%2 == 0){
        console.log("The number entered is " +num+ " and number is Even");
    }
    else{
        console.log("The number entered is " +num+ " and number is Odd");  
    }
} 
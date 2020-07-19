alert("Welcome!! If we want to perform Addition/Substraction/Multiplication/Division/Modulus then enter 2 numbers and to perform squareRoot enter 1 number")
let num = prompt("Enter numbers to perform operations ");
let arr = num.split(" ");
let oper = parseInt(prompt("Enter the choice : 1.Addition \n 2.Substraction\n3.Multiplication\n4.Division\n5.SquareRoot\n6.Modulus"));

let num1 = parseInt(arr[0]);
let num2 = parseInt(arr[1]);

// console.log(num1);
// console.log(num2);
// console.log(oper);

let result;

switch(oper){
    case 1 :
        result = num1+num2;
        alert(result);
        break;
        case 2 :
            result = num1-num2;
            alert(result);
            break;
         case 3 :
        result = num1*num2;
        alert(result);
        break;
        case 4 :
        result = num1/num2;
        alert(result);
        break;
        case 5 :
            
        result = num1*num1;
        alert(result);
        break;
        case 6 :
        result = num1%num2;
        alert(result);
        break;
        default :
            alert("Please enter valid choice");
            break;
}
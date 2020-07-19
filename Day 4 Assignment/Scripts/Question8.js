//console.log("Hiiiiii");

// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function(){alert("You agreed");},
//     function(){alert("You cancelled the execution");}
// );

//Replace the above code using arrow functions

let ask = (question,yes,no) => {
    if(confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You cancelled the execution")
);
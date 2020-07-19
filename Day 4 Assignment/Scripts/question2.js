console.log("Question 2");

const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript"
    }
}

//Destructure the above objects

console.log(student.name);
console.log(student.projects.diceGame);

const {name , age} = student;
console.log(name);
console.log(age);

const {projects : {diceGame}} = student;
console.log(diceGame);
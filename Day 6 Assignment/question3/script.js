console.log("Question 3");


let userName = prompt("Enter Name");


let Name = document.getElementById('name');
let Clock = document.getElementById('clock');


Name.innerHTML = `Welcome ${userName} !!`;
btn.innerHTML = `Mode Switch Enabled `;
function dark(){

    let el = document.body;
    el.classList.toggle('dark-mode');
}


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    Clock.innerText = time;
}
setInterval(clock, 1000);
console.log("Question 2");

function tables(){
    let num ;

    num = Number(document.getElementById('text').value);
    for(let i=1;i<=10;i++){
        let p = document.getElementById('print');
        p.innerHTML += (num*i) + "<br/>";
    }
}
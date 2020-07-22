console.log("Question 1");






    let colors = ['Red','Yellow','Blue','Green'];

    let colorsIndex =0;
    function changeColor(){
        let col = document.getElementById("body");
        if(colorsIndex >= colors.length){
            colorsIndex = 0;
        }
        col.style.backgroundColor = colors[colorsIndex];
        colorsIndex++;

        setInterval(changeColor, 5000);
    }
    
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = GetRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.innerText = "Your New Color";
    let color = document.createElement("h2");
    color.innerText = randomColor;
    div.append(color);
    div.style.backgroundColor = randomColor;

    
})




function GetRandomColor(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    let color = `rgb(${red},${green},${blue})`;
    return color

}

// let btn2 = document.createElement("button");
// btn2.innerText = "Generate div Coler";
// let body = document.querySelector("body");
// body.append(btn2);

// btn2.addEventListener("click",function(){
//     let box =  document.querySelector(".box");
//     let bColor = CreateColor();
//     console.log(bColor);
//     box.style.backgroundColor = bColor;
//     let bRedius = redius();
//     console.log(bRedius);
//     box.style.borderRadius = bRedius;

// })

// function CreateColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color =`rgb(${red},${green},${blue})`;

//     return color;
    

    
// }


// function redius(){
//     let bdr = Math.floor(Math.random()*20)+30;
//     let redius = `${bdr}%`;
//     return redius;
// }

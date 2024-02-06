

let button = document.querySelector(".btn");  // select button


let container = document.querySelector(".container");  // select for store heading

let heading = document.createElement("h1");  // create new element h1
heading.innerText = "Start";
heading.className = "text"

let img = document.createElement("img")
img.className = "photo"
container.appendChild(img);


container.appendChild(heading);   // for appendChild()  in web browder with js

const tossFunction = () =>{
    const randomValue = Math.random() * (100-1) + 1;
   
    if(randomValue.toFixed(0) % 2 === 0)  // toFixed(0) krne se decimal value nhi ati only pure no.
    {
        img.setAttribute("src","https://en.numista.com/catalogue/photos/inde/2409-original.jpg")  // net connect hone pr hi coin dekega
        heading.innerText = "HEADS";
        heading.style.color = "green";
    }
    else{
        img.setAttribute("src","https://tse2.mm.bing.net/th?id=OIP.Am0FG6M5wpEDtRuZbwCAWAHaHa&pid=Api&P=0&h=220")
        img.style.width = "100px"
        heading.innerText = "TAILS";
        heading.style.color = "blue";
    }
}

button.addEventListener("click",tossFunction);  // addEventListener() = for click event
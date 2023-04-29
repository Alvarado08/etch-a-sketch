//* DOM Elements
const input = document.querySelector("#input-size");
const generateBtns = document.querySelectorAll(".generateBtn");
const grid = document.querySelector("#grid");
const iconLoad = document.querySelector("#icon-load"); 

//* Initial Grid onLoad
function gridLoad(){
    let size = 4;
    grid.style.display = "grid";
    grid.style.gridTemplate = `repeat(${size},3rem) / repeat(${size},3rem)`;    
    grid.style.gap = "1px";
    for(let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add("grid-elem");
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
      
        // Assign the random color to the background of the child element
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = randomColor;
        });
        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "white";
        });
        grid.appendChild(div);
    }
}
gridLoad();

function createBox(size){
    iconLoad.style.transform += "rotate(360deg)";
    grid.textContent = "";
    grid.style.display = "grid";
    if(size > 100){
        input.value = "";
        input.placeholder = "Size is bigger than 100!";
        return gridLoad();
    }
    if(input.value > 10 && input.value <= 16){
        grid.style.gridTemplate = `repeat(${size},2rem) / repeat(${size},2rem)`;
    }else if(input.value > 16 && input.value <= 20){
        grid.style.gridTemplate = `repeat(${size},1.5rem) / repeat(${size},1.5rem)`;
    }else if(size > 20 && size <= 26){
        grid.style.gridTemplate = `repeat(${size},1.2rem) / repeat(${size},1.2rem)`;
    }else if(size > 26 && size <= 30){
        grid.style.gridTemplate = `repeat(${size},1rem) / repeat(${size},1rem)`;
    }else if(size > 30 && size <= 36){
        grid.style.gridTemplate = `repeat(${size},.8rem) / repeat(${size},.8rem)`;
    }else if(size > 36){
        grid.style.gridTemplate = `repeat(${size},.7rem) / repeat(${size},.7rem)`;
    }else{
        grid.style.gridTemplate = `repeat(${size},3rem) / repeat(${size},3rem)`;
    }
    grid.style.gap = "1px";
    for(let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add("grid-elem");
        if(size>36)div.style.border = "2px solid black";
        grid.appendChild(div);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
  
        // Assign the random color to the background of the child element
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = randomColor;
        })
        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "white";
        })
    }
}

function randomBox(){
    iconLoad.style.transform += "rotate(360deg)";
    input.value = "";
    input.placeholder = "Give me a size(max 100)";
    const size = Math.floor(Math.random()*99) + 1;
    grid.textContent = "";
    grid.style.display = "grid";
    if(size > 10 && size <= 16){
        grid.style.gridTemplate = `repeat(${size},2rem) / repeat(${size},2rem)`;
    }else if(size > 16 && size <= 20){
        grid.style.gridTemplate = `repeat(${size},1.5rem) / repeat(${size},1.5rem)`;
    }else if(size > 20 && size <= 26){
        grid.style.gridTemplate = `repeat(${size},1.2rem) / repeat(${size},1.2rem)`;
    }else if(size > 26 && size <= 30){
        grid.style.gridTemplate = `repeat(${size},1rem) / repeat(${size},1rem)`;
    }else if(size > 30 && size <= 36){
        grid.style.gridTemplate = `repeat(${size},.8rem) / repeat(${size},.8rem)`;
    }else if(size > 36){
        grid.style.gridTemplate = `repeat(${size},.7rem) / repeat(${size},.7rem)`;
    }else{
        grid.style.gridTemplate = `repeat(${size},3rem) / repeat(${size},3rem)`;
    }
    grid.style.gap = "1px";
    for(let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add("grid-elem");
        if(size>36)div.style.border = "2px solid black";
        grid.appendChild(div);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
  
        // Assign the random color to the background of the child element
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = randomColor;
        })
        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "white";
        })
    }
}

generateBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        if(btn.id === "custom-size"){
            let inputValue = +(input.value);
            if(isNaN(inputValue)){
                input.value = "";
                input.placeholder = "Give me a number!";
            }else{
                createBox(inputValue);
            }
        }else{
            randomBox();
        }
    })
})